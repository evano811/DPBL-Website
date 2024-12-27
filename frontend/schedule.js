document.addEventListener("DOMContentLoaded", () => {
    fetch('schedule-data.json')
        .then(response => response.json())
        .then(data => {
            const tableBody = document.querySelector('#scheduleTable tbody');
            tableBody.innerHTML = ''; // Clear any existing data
            data.forEach(game => {
                const row = document.createElement('tr');
                row.innerHTML = `
                    <td>${game.date}</td>
                    <td>${game.time}</td>
                    <td>${game.team1}</td>
                    <td>${game.team2}</td>
                    <td>${game.location}</td>
                `;
                tableBody.appendChild(row);
            });
        })
        .catch(error => console.error('Error loading schedule data:', error));
});
