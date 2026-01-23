function bookAppointment() {
    let owner = document.getElementById("ownerName").value;
    let pet = document.getElementById("petName").value;
    let date = document.getElementById("date").value;

    if (owner && pet && date) {
        document.getElementById("bookingStatus").innerText =
            "✅ Appointment booked successfully!";
    } else {
        document.getElementById("bookingStatus").innerText =
            "❌ Please fill all fields.";
    }
}

function checkVaccine() {
    let pet = document.getElementById("petSearch").value;

    if (pet) {
        document.getElementById("vaccineStatus").innerText =
            "💉 Vaccinations are up to date.";
    } else {
        document.getElementById("vaccineStatus").innerText =
            "❌ Enter pet name.";
    }
}
// Simple dashboard animation
document.querySelectorAll('.dash-card p').forEach(card => {
    let target = Number(card.innerText);
    let count = 0;

    let interval = setInterval(() => {
        count++;
        card.innerText = count;
        if (count >= target) clearInterval(interval);
    }, 40);
});


