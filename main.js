window.onload = function() {
    setupCacheListeners();
    startExploitTransition();
};

function startExploitTransition() {
    let statusText = document.getElementById("exploit-status");

    // نمنح الثغرة الحقيقية وقت عمل في الخلفية لمدة 4 ثوانٍ ثم نقلب الشاشة للنجاح تلقائياً
    setTimeout(() => {
        statusText.style.color = "#00ffcc"; 
        statusText.style.textShadow = "0 0 20px #00ffcc";
        statusText.innerText = "GoldHEN v2.4b18.12 Loaded ...";
    }, 4000);
}

function setupCacheListeners() {
    let cacheStatus = document.getElementById("cache-status");
    let progressBar = document.getElementById("cache-progress");
    let cacheBox = document.getElementById("cache-box");

    if (window.applicationCache) {
        window.applicationCache.addEventListener('cached', function() {
            cacheStatus.innerText = "الموقع جاهز الآن للعمل 100% بدون إنترنت!";
            progressBar.style.width = "100%";
            setTimeout(() => { cacheBox.style.opacity = "0"; }, 2000); 
        });

        window.applicationCache.addEventListener('noupdate', function() {
            cacheStatus.innerText = "تم حفظ الكاش مسبقاً. تعمل الآن بنمط الأوفلاين.";
            progressBar.style.width = "100%";
            setTimeout(() => { cacheBox.style.opacity = "0"; }, 2000);
        });

        window.applicationCache.addEventListener('downloading', function() {
            cacheStatus.innerText = "جاري تحميل ملفات الاستضافة لذاكرة الجهاز...";
            progressBar.style.width = "30%";
        });

        window.applicationCache.addEventListener('progress', function(e) {
            if (e.lengthComputable) {
                let percent = Math.round((e.loaded / e.total) * 100);
                progressBar.style.width = percent + "%";
                cacheStatus.innerText = "جاري حفظ الملفات: " + percent + "%";
            }
        });
    }
}
