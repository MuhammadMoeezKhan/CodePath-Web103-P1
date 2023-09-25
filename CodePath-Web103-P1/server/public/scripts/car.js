const renderCar = async () => {
    const requestedID = parseInt(window.location.href.split("/").pop());

    const response = await fetch("/car");
    const data = await response.json();

    const carContent = document.getElementById("car-content");

    let car;

    car = data.find((car) => car.id === requestedID);

    if (car) {
        document.getElementById("image").src = car.image;
        document.getElementById("name").textContent = car.name;
        document.getElementById("submittedBy").textContent = "Submitted by: " + car.submittedBy;
        document.getElementById("pricePoint").textContent = "Price: " + car.pricePoint;
        document.getElementById("audience").textContent = "Great For: " + car.audience;
        document.getElementById("description").textContent = car.description;
        document.title = `Dream Wheels - ${
            car.name
        }`;
    } else {
        const message = document.createElement("h2");
        message.textContent = "No Cars Available 😞";
        carContent.appendChild(message);
    }
};

renderCar();
