import datetime
from flask import request, jsonify

TRIAL_ENABLED = False
TRIAL_DAYS = 3
TRIAL_KEY = "change-me"


def setup(app, db):
    def get(k):
        c = db()
        r = c.execute("SELECT value FROM app_state WHERE key=?", (k,)).fetchone()
        c.close()
        return r["value"] if r else None

    def put(k, v):
        c = db()
        c.execute("INSERT OR REPLACE INTO app_state(key,value) VALUES(?,?)", (k, v))
        c.commit()
        c.close()

    def end_date():
        if get("trial_unlock") == "1":
            return None
        e = get("trial_end")
        if e:
            return datetime.date.fromisoformat(e)
        s = get("trial_start")
        if not s:
            s = datetime.date.today().isoformat()
            put("trial_start", s)
        return datetime.date.fromisoformat(s) + datetime.timedelta(days=TRIAL_DAYS)

    def expired():
        e = end_date()
        return e is not None and datetime.date.today() >= e

    @app.before_request
    def gate():
        if not TRIAL_ENABLED:
            return None
        p = request.path
        if p.startswith("/trial-admin") or p.startswith("/static") or p in ("/api/auth/status", "/api/auth/logout"):
            return None
        if not expired():
            return None
        if p.startswith("/api/"):
            return jsonify({"error": "Trial ended"}), 403
        return "<h2>Trial ended</h2><p>Please contact the owner to continue.</p>", 403

    @app.route("/trial-admin", methods=["GET", "POST"])
    def trial_admin():
        msg = ""
        if request.method == "POST":
            if request.form.get("key") != TRIAL_KEY:
                msg = "Wrong key."
            else:
                try:
                    d = int(request.form.get("days") or 0)
                except ValueError:
                    d = 0
                if d <= 0:
                    put("trial_unlock", "1")
                    msg = "Unlocked (no limit)."
                else:
                    put("trial_unlock", "0")
                    put("trial_end", (datetime.date.today() + datetime.timedelta(days=d)).isoformat())
                    msg = "Trial extended by %d days." % d
        e = end_date()
        return ("<h3>Trial settings</h3><p>Lock switch: %s</p><p>Ends: %s</p><p>%s</p>"
                "<form method=post><input name=key placeholder=key type=password> "
                "<input name=days placeholder='days (0 = unlock)'> <button>Save</button></form>"
                % ("ON" if TRIAL_ENABLED else "OFF", e or "no limit", msg))
