document.addEventListener('DOMContentLoaded', () => {
    const fontSizeSelector = document.getElementById("fontSizeSelector");

    // تحميل التفضيل المحفوظ عند فتح الصفحة
    const savedFontSize = localStorage.getItem("fontSize");

    if (savedFontSize) {
        // تعيين حجم الخط للجسم ولجميع العناصر النصية
        document.body.style.fontSize = savedFontSize;
        document.querySelectorAll("body, h1, h2, h3, h4, h5, h6, p, span, a, li, .content").forEach(el => {
            el.style.fontSize = savedFontSize;
        });

        // تعيين قيمة الـ select بناءً على الحجم المحفوظ
        if (fontSizeSelector) fontSizeSelector.value = savedFontSize;
    }

    // تغيير حجم الخط عند اختيار حجم جديد من select
    if (fontSizeSelector) {
        fontSizeSelector.addEventListener("change", function () {
            const selectedSize = fontSizeSelector.value;
            document.body.style.fontSize = selectedSize;

            // تطبيق الحجم الجديد على جميع العناصر النصية
            document.querySelectorAll("body, h1, h2, h3, h4, h5, h6, p, span, a, li, .content").forEach(el => {
                el.style.fontSize = selectedSize;
            });

            // حفظ الحجم الجديد في localStorage
            localStorage.setItem("fontSize", selectedSize);
        });
    }

    // حفظ الإعدادات عند الضغط على زر "حفظ الإعدادات"
    const saveButton = document.getElementById("setting");
    if (saveButton) {
        saveButton.addEventListener("click", function () {
            const selectedSize = fontSizeSelector.value;
            document.body.style.fontSize = selectedSize;

            // تطبيق الحجم الجديد على جميع العناصر النصية
            document.querySelectorAll("body, h1, h2, h3, h4, h5, h6, p, span, a, li, .content").forEach(el => {
                el.style.fontSize = selectedSize;
            });

            // حفظ الحجم الجديد في localStorage
            localStorage.setItem("fontSize", selectedSize);

            // رسالة تأكيد
            alert("تم حفظ الإعدادات بنجاح!");
        });
    }

    // إعدادات الوضع الداكن
    const toggle = document.getElementById('darkModeToggle');
    if (toggle) {
        toggle.addEventListener('change', () => {
            document.body.classList.toggle('dark-mode');
            document.querySelectorAll('.contact-section, .contact-info, .contact-form, .submit-btn').forEach(el => {
                el.classList.toggle('dark-mode');
            });
        });
    }
});