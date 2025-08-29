const burgerBtn = document.querySelector(".burger-btn");
const offcanvas = document.querySelector(".offcanvas");
const closeBtn = document.querySelector(".offcanvas__close");
const overlay = document.querySelector(".overlay");

burgerBtn.addEventListener("click", () => {
    offcanvas.classList.add("active");
    overlay.classList.add("active");
});

closeBtn.addEventListener("click", () => {
    offcanvas.classList.remove("active");
    overlay.classList.remove("active");
});
overlay.addEventListener("click", () => {
    offcanvas.classList.remove("active");
    overlay.classList.remove("active");
});

// form
(function () {
    function parseRules(el) {
        const raw = el.dataset.rules || "";
        return raw.split("|").filter(Boolean).map(r => {
            const [name, arg] = r.split(":");
            return { name: name.trim(), arg: arg?.trim() };
        });
    }

    function showError(el, msg) {
        el.classList.add("is-invalid");
        let hint = el.nextElementSibling;
        if (!hint || !hint.classList.contains("field-error")) {
            hint = document.createElement("div");
            hint.className = "field-error";
            el.insertAdjacentElement("afterend", hint); // <-- inputdan dərhal sonra əlavə olunur
        }
        hint.textContent = msg;
    }

    function clearError(el) {
        el.classList.remove("is-invalid");
        const hint = el.parentElement.querySelector(".field-error");
        if (hint) hint.textContent = "";
    }

    const rules = {
        required(el) {
            if (el.type === "checkbox" || el.type === "radio") {
                const group = el.form.querySelectorAll(`input[name="${el.name}"]`);
                return [...group].some(i => i.checked) ? true : "Bu sahə məcburidir.";
            }
            return el.value.trim() ? true : "Bu sahə məcburidir.";
        },
        email(el) {
            if (!el.value.trim()) return true;
            return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(el.value)
                ? true
                : "Email düzgün deyil.";
        },
        min(el, n) {
            return el.value.trim().length >= +n ? true : `Minimum ${n} simvol.`;
        },
        max(el, n) {
            return el.value.trim().length <= +n ? true : `Maksimum ${n} simvol.`;
        },
        pattern(el, p) {
            if (!el.value.trim()) return true;
            const re = new RegExp(p);
            return re.test(el.value) ? true : "Dəyər nümunəyə uymur.";
        },
        number(el) {
            if (!el.value.trim()) return true;
            return !isNaN(+el.value) ? true : "Rəqəm olmalıdır.";
        },
        minnum(el, n) {
            if (!el.value.trim()) return true;
            return +el.value >= +n ? true : `Ən az ${n}.`;
        },
        maxnum(el, n) {
            if (!el.value.trim()) return true;
            return +el.value <= +n ? true : `Ən çox ${n}.`;
        },
        match(el, otherName) {
            const other = el.form.querySelector(`[name="${otherName}"]`);
            return other && el.value === other.value ? true : "Uyğun gəlmir.";
        },
        filetypes(el, csv) {
            const exts = csv.split(",").map(s => s.trim().toLowerCase());
            const f = el.files?.[0];
            if (!f) return true;
            const ok = exts.some(ext => f.name.toLowerCase().endsWith("." + ext));
            return ok ? true : `Fayl tipi: ${exts.join(", ")} olmalıdır.`;
        },
        filesize(el, kb) {
            const f = el.files?.[0];
            if (!f) return true;
            return f.size <= (+kb * 1024) ? true : `Fayl max ${kb}KB olmalıdır.`;
        },
    };

    function validateField(el) {
        clearError(el);
        const list = parseRules(el);
        for (const r of list) {
            const fn = rules[r.name];
            if (!fn) continue;
            const res = fn(el, r.arg);
            if (res !== true) {
                showError(el, el.dataset[`msg${r.name}`] || res);
                return false;
            }
        }
        return true;
    }

    function attach(form) {
        const inputs = form.querySelectorAll("[data-rules]");
        inputs.forEach(el => {
            el.addEventListener("input", () => validateField(el));
            el.addEventListener("change", () => validateField(el));
            el.addEventListener("blur", () => validateField(el));
        });
        form.addEventListener("submit", (e) => {
            let ok = true;
            inputs.forEach(el => { if (!validateField(el)) ok = false; });
            if (!ok) e.preventDefault();
        });
    }

    document.addEventListener("DOMContentLoaded", () => {
        document.querySelectorAll("form[data-validate]").forEach(attach);
    });
})();

// Localstorage
document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector("form[data-validate]");
    const nameInput = form.querySelector("#name");
    const emailInput = form.querySelector("#email");
    const messageInput = form.querySelector("#message");

    const savedName = localStorage.getItem("username");
    if (savedName) {
        nameInput.value = savedName;
    }

    form.addEventListener("submit", (e) => {
        e.preventDefault();

        let isValid = true;
        [nameInput, emailInput, messageInput].forEach(el => {
            const event = new Event("blur", { bubbles: true });
            el.dispatchEvent(event);
            if (el.classList.contains("is-invalid")) {
                isValid = false;
            }
        });

        if (!isValid) {
            alert("Please fill it completly! ⚠️");
            return;
        }

        const username = nameInput.value.trim();
        localStorage.setItem("username", username);

        alert("Welcome, " + username + "! Your name storaged ✅");
        form.reset();
    });
});
// IntersectionObserver
document.addEventListener("DOMContentLoaded", () => {
    const elements = document.querySelectorAll(".animate-on-scroll");

    const observer = new IntersectionObserver(
        (entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("visible");
                    observer.unobserve(entry.target);
                }
            });
        },
        {
            threshold: 0.2
        }
    );

    elements.forEach(el => observer.observe(el));
});



