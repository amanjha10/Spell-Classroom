
const dashboardItems = [
    { title: 'Classroom', icon: '👥', color: 'purple' },
    { title: 'Calendar', icon: '📅', color: 'yellow' },
    { title: 'Assignment', icon: '📝', color: 'purple' },
    { title: 'Quizzes', icon: '🧠', color: 'yellow' },
    { title: 'Codehub', icon: '💻', color: 'purple' },
    { title: 'Awards', icon: '🏆', color: 'yellow' },
    { title: 'Badges', icon: '🎖️', color: 'purple' },
    { title: 'Messages', icon: '💬', color: 'yellow' },
    { title: 'Announcements', icon: '📢', color: 'purple' },
    { title: 'Canteen', icon: '🍽️', color: 'yellow' },
    { title: 'Facility', icon: '🏢', color: 'purple' },
    { title: 'Health Center', icon: '❤️', color: 'yellow' },
    { title: 'Events', icon: '🎉', color: 'purple' },
    { title: 'Sports', icon: '⚽', color: 'yellow' },
    { title: 'Career Services', icon: '💼', color: 'purple' },
    { title: 'Feedback', icon: '⭐', color: 'yellow' },
    { title: 'Attendance', icon: '✅', color: 'purple' },
    { title: 'Meetings', icon: '📞', color: 'yellow' }
];


const grid = document.getElementById('dashboardGrid');
dashboardItems.forEach(item => {
    const card = document.createElement('div');
    card.className = 'dashboard-card';
    card.innerHTML = `
        <div class="card-icon icon-${item.color}">${item.icon}</div>
        <div class="card-title">${item.title}</div>
    `;
    card.addEventListener('click', () => alert(`Opening ${item.title}...`));
    grid.appendChild(card);
});


document.querySelectorAll('.nav-item').forEach(item => {
    item.addEventListener('click', function() {
        document.querySelector('.nav-item.active').classList.remove('active');
        this.classList.add('active');
    });
});