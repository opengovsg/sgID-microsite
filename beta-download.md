---
layout: plain
---

<head>
    <title>sgID Beta Download</title>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link href="https://fonts.googleapis.com/css?family=Rubik" rel="stylesheet">
    <link rel="stylesheet" type="text/css" href="{{ "/assets/css/beta-download.css" | relative_url }}">
    <link rel="icon" type="image/png" href="/assets/img/favicon.png">
</head>

<body>
    <div class="background flex-center">
        <div class="login flex-center">
            <img src="/assets/images/logo.png" height="60">
            <h2>Beta Download</h2>
            <p class="small-text">Please wait while you're being redirected...</p>
            <div class="bottom-bar">
                <a href="https://play.google.com/apps/testing/sg.gov.id.digic"><img class="download-btn"
                        src="/assets/images/googleplay.svg"></a>
                <a href="https://testflight.apple.com/join/jNBz3odb"><img class="download-btn"
                        src="/assets/images/appstore.svg"></a>
            </div>
        </div>
    </div>
</body>
<script>
    var userAgent = navigator.userAgent || navigator.vendor || window.opera
    if (/android/i.test(userAgent)) {
        window.location.href = 'https://play.google.com/apps/testing/sg.gov.id.digic';
    }
    if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
        window.location.href = 'https://testflight.apple.com/join/jNBz3odb';
    }
</script>