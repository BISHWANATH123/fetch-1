document.addEventListener('DOMContentLoaded', function () {
    const userDataForm = document.getElementById('userDataForm');
    const retrieveDataBtn = document.getElementById('retrieveDataBtn');
    const userDataDisplay = document.getElementById('userDataDisplay');

    userDataForm.addEventListener('submit', function (event) {
        event.preventDefault();

        const name = document.getElementById('name').value;
        const age = document.getElementById('age').value;

        // Store data in local storage
        localStorage.setItem('name', name);
        localStorage.setItem('age', age);

        // Clear the form
        userDataForm.reset();
    });

    retrieveDataBtn.addEventListener('click', function () {
        // Retrieve data from local storage
        const storedName = localStorage.getItem('name');
        const storedAge = localStorage.getItem('age');

        // Display data in a table
        if (storedName && storedAge) {
            userDataDisplay.innerHTML = `
                <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Age</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>${storedName}</td>
                            <td>${storedAge}</td>
                        </tr>
                    </tbody>
                </table>
            `;
        } else {
            userDataDisplay.innerHTML = '<p>No data found in local storage.</p>';
        }
    });
});
