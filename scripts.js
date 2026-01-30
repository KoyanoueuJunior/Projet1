// Affiche un message quand on clique sur le bouton
function showMessage() {
    alert("Bienvenue sur ma page ! J'espère que vous aimez ce site !");
}

// Affiche / cache les détails
function toggleDetails() {
    const detailsBox = document.getElementById("detailsBox");

    if (detailsBox.style.display === "none") {
        detailsBox.style.display = "block";
        detailsBox.style.animation = "fadeIn 0.5s ease";
    } else {
        detailsBox.style.display = "none";
    }
}

// Animation au chargement
document.addEventListener("DOMContentLoaded", function () {

    console.log("Page chargée avec succès !");

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = "1";
                entry.target.style.transform = "translateY(0)";
            }
        });
    });

    document.querySelectorAll(".card, .passion-item, .contact-btn")
        .forEach(el => {
            el.style.opacity = "0";
            el.style.transform = "translateY(20px)";
            el.style.transition = "all 0.6s ease";
            observer.observe(el);
        });

    document.querySelectorAll(".contact-btn").forEach(btn => {
        btn.addEventListener("click", () => {
            alert("Contact : " + btn.textContent);
        });
    });
});

// Animation fadeIn
const style = document.createElement("style");
style.textContent = `
@keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
}`;
document.head.appendChild(style);
