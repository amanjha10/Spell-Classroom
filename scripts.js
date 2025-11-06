
document.addEventListener('DOMContentLoaded', function() {
    initNavigation();
    initSidebar();
    initCharts();
    initButtons();
    initThemeToggle();
});


function initNavigation() {
    const navItems = document.querySelectorAll('.nav-item');
    const sections = document.querySelectorAll('.section');
    
    navItems.forEach(item => {
        item.addEventListener('click', function(e) {
            e.preventDefault();
            
     
            navItems.forEach(nav => nav.classList.remove('active'));
            
            
            this.classList.add('active');
            
            
            sections.forEach(section => section.classList.remove('active'));
            
            
            const sectionId = this.getAttribute('data-section');
            const targetSection = document.getElementById(sectionId);
            if (targetSection) {
                targetSection.classList.add('active');
            }
            
            
            if (window.innerWidth <= 768) {
                document.getElementById('sidebar').classList.remove('active');
            }
        });
    });
}


function initSidebar() {
    const sidebar = document.getElementById('sidebar');
    const sidebarToggle = document.getElementById('sidebarToggle');
    
    sidebarToggle.addEventListener('click', function() {
        sidebar.classList.toggle('active');
    });
    
    
    document.addEventListener('click', function(e) {
        if (window.innerWidth <= 768) {
            if (!sidebar.contains(e.target) && !sidebarToggle.contains(e.target)) {
                sidebar.classList.remove('active');
            }
        }
    });
}


function initCharts() {
    const canvas = document.getElementById('attendanceChart');
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    
    
    drawAttendanceChart(ctx, canvas);
}

function drawAttendanceChart(ctx, canvas) {
    const width = canvas.width = canvas.offsetWidth;
    const height = canvas.height = canvas.offsetHeight;
    
   
    const data = [88, 92, 85, 90, 94, 89, 92];
    const labels = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
    const maxValue = 100;
    
  
    const padding = 40;
    const chartWidth = width - padding * 2;
    const chartHeight = height - padding * 2;
    
    
    ctx.clearRect(0, 0, width, height);
    
 
    ctx.strokeStyle = '#e2e8f0';
    ctx.lineWidth = 1;
    
    for (let i = 0; i <= 5; i++) {
        const y = padding + (chartHeight / 5) * i;
        ctx.beginPath();
        ctx.moveTo(padding, y);
        ctx.lineTo(width - padding, y);
        ctx.stroke();
        
        ctx.fillStyle = '#64748b';
        ctx.font = '12px Inter';
        ctx.textAlign = 'right';
        ctx.fillText(maxValue - (maxValue / 5) * i + '%', padding - 10, y + 4);
    }
    
    
    ctx.strokeStyle = '#6366f1';
    ctx.lineWidth = 3;
    ctx.lineCap = 'round';
    ctx.lineJoin = 'round';
    
    ctx.beginPath();
    data.forEach((value, index) => {
        const x = padding + (chartWidth / (data.length - 1)) * index;
        const y = padding + chartHeight - (value / maxValue) * chartHeight;
        
        if (index === 0) {
            ctx.moveTo(x, y);
        } else {
            ctx.lineTo(x, y);
        }
    });
    ctx.stroke();
    
   
    data.forEach((value, index) => {
        const x = padding + (chartWidth / (data.length - 1)) * index;
        const y = padding + chartHeight - (value / maxValue) * chartHeight;
        
        
        ctx.fillStyle = '#6366f1';
        ctx.beginPath();
        ctx.arc(x, y, 6, 0, Math.PI * 2);
        ctx.fill();
        
        
        ctx.fillStyle = '#ffffff';
        ctx.beginPath();
        ctx.arc(x, y, 3, 0, Math.PI * 2);
        ctx.fill();
        
        
        ctx.fillStyle = '#64748b';
        ctx.font = '12px Inter';
        ctx.textAlign = 'center';
        ctx.fillText(labels[index], x, height - padding + 20);
    });
}


function initButtons() {
    
    const createAnnouncementBtn = document.getElementById('createAnnouncementBtn');
    const addTeacherBtn = document.getElementById('addTeacherBtn');
    const addClassroomBtn = document.getElementById('addClassroomBtn');
    const addEmployeeBtn = document.getElementById('addEmployeeBtn');
    
    if (createAnnouncementBtn) {
        createAnnouncementBtn.addEventListener('click', () => {
            showToast('Create Announcement form would open here');
        });
    }
    
    if (addTeacherBtn) {
        addTeacherBtn.addEventListener('click', () => {
            showToast('Add Teacher form would open here');
        });
    }
    
    if (addClassroomBtn) {
        addClassroomBtn.addEventListener('click', () => {
            showToast('Add Classroom form would open here');
        });
    }
    
    if (addEmployeeBtn) {
        addEmployeeBtn.addEventListener('click', () => {
            showToast('Add Employee form would open here');
        });
    }
    
    
    const actionButtons = document.querySelectorAll('.action-btn');
    actionButtons.forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.stopPropagation();
            const icon = this.querySelector('i');
            if (icon.classList.contains('fa-eye')) {
                showToast('View details');
            } else if (icon.classList.contains('fa-edit')) {
                showToast('Edit form would open here');
            } else if (icon.classList.contains('fa-trash')) {
                if (confirm('Are you sure you want to delete this item?')) {
                    showToast('Item deleted successfully');
                }
            }
        });
    });
    
    
    const notificationBtn = document.getElementById('notificationBtn');
    if (notificationBtn) {
        notificationBtn.addEventListener('click', () => {
            showToast('Notifications panel would open here');
        });
    }
}


function initThemeToggle() {
    const themeToggle = document.getElementById('themeToggle');
    const icon = themeToggle.querySelector('i');
    let isDark = false;
    
    themeToggle.addEventListener('click', () => {
        isDark = !isDark;
        
        if (isDark) {
            icon.classList.remove('fa-moon');
            icon.classList.add('fa-sun');
            document.body.style.setProperty('--bg-main', '#0f172a');
            document.body.style.setProperty('--bg-card', '#1e293b');
            document.body.style.setProperty('--text-primary', '#f1f5f9');
            document.body.style.setProperty('--text-secondary', '#cbd5e1');
            document.body.style.setProperty('--border', '#334155');
            showToast('Dark mode enabled');
        } else {
            icon.classList.remove('fa-sun');
            icon.classList.add('fa-moon');
            document.body.style.setProperty('--bg-main', '#f8fafc');
            document.body.style.setProperty('--bg-card', '#ffffff');
            document.body.style.setProperty('--text-primary', '#0f172a');
            document.body.style.setProperty('--text-secondary', '#64748b');
            document.body.style.setProperty('--border', '#e2e8f0');
            showToast('Light mode enabled');
        }
    });
}


function showToast(message) {
    const toast = document.getElementById('toast');
    const toastMessage = document.getElementById('toastMessage');
    
    toastMessage.textContent = message;
    toast.classList.add('show');
    
    setTimeout(() => {
        toast.classList.remove('show');
    }, 3000);
}


const searchInputs = document.querySelectorAll('input[type="text"]');
searchInputs.forEach(input => {
    if (input.placeholder.includes('Search')) {
        input.addEventListener('input', function(e) {
            const searchTerm = e.target.value.toLowerCase();
            console.log('Searching for:', searchTerm);
           
        });
    }
});


const filterSelects = document.querySelectorAll('.filter-select');
filterSelects.forEach(select => {
    select.addEventListener('change', function(e) {
        console.log('Filter changed:', e.target.value);
        
    });
});


const pageButtons = document.querySelectorAll('.page-btn');
pageButtons.forEach(btn => {
    btn.addEventListener('click', function() {
        pageButtons.forEach(b => b.classList.remove('active'));
        this.classList.add('active');
        showToast('Loading page ' + this.textContent);
    });
});


const employeesData = [
    {
        name: 'John Smith',
        role: 'Teacher',
        department: 'Mathematics',
        email: 'john.smith@spell.edu',
        joinDate: 'Jan 15, 2023',
        status: 'Active'
    },
    {
        name: 'Sarah Johnson',
        role: 'Admin',
        department: 'Administration',
        email: 'sarah.j@spell.edu',
        joinDate: 'Mar 22, 2023',
        status: 'Active'
    },
    {
        name: 'Michael Brown',
        role: 'Teacher',
        department: 'Science',
        email: 'm.brown@spell.edu',
        joinDate: 'Sep 10, 2022',
        status: 'Active'
    }
];


const studentsData = [
    {
        name: 'Emma Wilson',
        class: 'Grade 10-A',
        rollNo: '1001',
        email: 'emma.w@student.spell.edu',
        attendance: 95,
        performance: 'Excellent'
    }
];


window.addEventListener('resize', function() {
    const canvas = document.getElementById('attendanceChart');
    if (canvas) {
        const ctx = canvas.getContext('2d');
        drawAttendanceChart(ctx, canvas);
    }
});


const profileMenu = document.querySelector('.profile-menu');
if (profileMenu) {
    profileMenu.addEventListener('click', function() {
        showToast('Profile menu would open here');
    });
}


const viewAllLinks = document.querySelectorAll('.view-all');
viewAllLinks.forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        showToast('Navigating to full view');
    });
});

console.log('Spell Classroom Admin Dashboard initialized successfully!');