  // Task 1
        function showAlert(event) {
            event.preventDefault();
            alert("You clicked the link!");
        }

        // Task 2
        function imageAlert(name) {
            alert("You clicked on " + name);
        }

        // Task 3
        function deleteRow(button) {
            let row = button.parentNode.parentNode;
            row.parentNode.removeChild(row);
        }

        // Task 4
        function changeImage() {
            document.getElementById("hoverImage").src = "https://via.placeholder.com/200?text=Hovered";
        }

        function resetImage() {
            document.getElementById("hoverImage").src = "https://via.placeholder.com/200?text=Original";
        }

        // Task 5
        let counter = 0;
        function increaseCounter() {
            counter++;
            document.getElementById("counterValue").innerText = counter;
        }
        function decreaseCounter() {
            counter--;
            document.getElementById("counterValue").innerText = counter;
        }