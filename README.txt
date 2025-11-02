EALA80 Admin + User Panel (connected demo)

Files:
 - admin.html   -> Admin panel (login: EALA80 / Alif298019)
 - user.html    -> User-facing panel (reads same shared data)
 - All data stored under localStorage key "eala_full_state_v1" by default.

Quick deploy (Netlify):
1. Create a ZIP containing admin.html and user.html (and README.txt).
2. On Netlify, New site -> Deploy manually -> Upload ZIP (or drag directory).
3. After deploy, open <your-site>/admin.html to login and manage. Open <your-site>/user.html to view user panel.

How data connects:
 - If admin.html and user.html are on the SAME site (same origin), both pages read/write the same localStorage; changes will appear after refresh.
 - For real realtime multi-device sync, you must use a backend or Firebase.

Enable Firebase (optional):
1. Create Firebase project -> Web app -> copy config snippet.
2. Replace/add Firebase initialisation in admin.html and user.html (search for comment about FIREBASE_CONFIG).
3. Modify JS to push state to Firestore/Realtime DB and listen for updates.
(If you want, send me the Firebase config and I will integrate the realtime code.)

Important:
 - This is a frontend demo so users & products are stored in browser storage. For production you need a backend or Firebase.
 - Admin credentials (demo): EALA80 / Alif298019
