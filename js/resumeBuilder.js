var bio, education, work, projects, site_map;

bio = {
    name: "Mike Deng",
    role: "web developer",
    contacts: {
        mobile: "13520994660",
        email: "894733082@qq.com",
        github: "mikedeng",
        twitter: "@armstrongdeng",
        location: "Hunnan district, Beijing"
    },
    welcomeMessage: "Hello, Thank you for visiting.",
    skills: ["Javascript", "React", "Vue", "Vuex", "ES6", "CSS3", "HTML", "Rails", "Mysql", "Git"],
    biopic: "https://avatars2.githubusercontent.com/u/13096571?v=3&s=460",
    display: function() {
        var authorName = HTMLheaderName.replace("%data%", this.name);
        var authorRole = HTMLheaderRole.replace("%data%", this.role);

        $("#header").prepend(authorRole);
        $("#header").prepend(authorName);

        var contact_items = [];
        var contact_key;
        for (contact_key in this.contacts) {
        	if(contact_key) {
    	        contact_items.push(HTMLcontactGeneric.replace("%contact%", contact_key).replace("%data%", this.contacts[contact_key]));
	        }
        }

        $("#topContacts, #footerContacts").append(contact_items);

        var bioPic = HTMLbioPic.replace("%data%", this.biopic);
        $("#header").append(bioPic);

        var welcome_msg = HTMLwelcomeMsg.replace("%data%", this.welcomeMessage);
        $("#header").append(welcome_msg);
        $("#header").append(HTMLskillsStart);

        var skill_arr = [];
        this.skills.forEach(function(s){
            skill_arr.push(HTMLskills.replace("%data%", s));
        });

        $("#skills").append(skill_arr);
    }
};

education = {
    schools: [{
        name: "Hunan railway professional technology college",
        location: "Zhuzhou, Hunan",
        degree: "Associate Degree",
        majors: ["Software Engineering"],
        dates: "September, 2007 - June, 2010",
        url: "http://www.hnrpc.com"
    }, {
        name: "Dao county first middle school",
        location: "Yongzhou, Hunan",
        degree: "Diploma",
        majors: ["science"],
        dates: "September, 2003 - June, 2007",
        url: "http://www.hndxyz.com/"
    }],
    onlineCourses: [{
        title: "Udacity Front-end Nanodegree",
        school: "Udacity online",
        dates: "Oct, 2016 - Dec, 2016",
        url: "http://udacity.com"
    }],
    display: function() {
        var school_entries = [];
        this.schools.forEach(function(s) {
            var _container = $(HTMLschoolStart);
            _container.append(HTMLschoolName.replace("%data%", s.name) + HTMLschoolDegree.replace("%data%", s.degree));
            _container.append(HTMLschoolDates.replace("%data%", s.dates));
            _container.append(HTMLschoolLocation.replace("%data%", s.location));
            _container.append(HTMLschoolMajor.replace("%data%", s.majors.join()));
            school_entries.push(_container);
        });

        var online_courses = [];
        this.onlineCourses.forEach(function(c) {
            var _container = $(HTMLonlineClasses);
            _container.append(HTMLonlineTitle.replace("%data%", c.title));
            _container.append(HTMLonlineSchool.replace("%data%", c.school));
            _container.append(HTMLonlineDates.replace("%data%", c.dates));
            _container.append(HTMLonlineURL.replace("%data%", c.url));
            online_courses.push(_container);
        });

        $('#education').append(school_entries);
        // $('#education').append(online_courses);
    }
};

work = {
    jobs: [
        {
        employer: "Percent",
        title: "Percent co. LTD",
        location: "1 Qingnian St, Jinlang Shangquan, Shenhe, Shenyang, Liaoning, China",
        dates: "March, 2018 - Now",
        description: "Worked as senior software engineer"
    },
    {
        employer: "Udesk",
        title: "Beijing wofeng shidai data technology co., LTD",
        location: "XiZhiMeng, XiCheng district, Beijing, China",
        dates: "June, 2015 - Feb, 2018",
        description: "Worked as senior software engineer"
    }, {
        employer: "Edoc2",
        title: "Shanghai Hongyi data technology co., LTD",
        location: "GuiPing road, XuHui district, Shanghai, China",
        dates: "Oct, 2012 - May, 2015",
        description: "Worked as senior software engineer"
    }, {
        employer: "HP",
        title: "Hewlett Packard technology Corporation",
        location: "Jinke road, Pudong district, Shanghai, China",
        dates: "Jan, 2012 - Oct, 2012",
        description: "Worked as software engineer"
    }, {
        employer: "Gasgoo",
        title: "Gasgoo.com Corporation",
        location: "ChaoAn road, Jiading district, Shanghai, China",
        dates: "June, 2010 - Jan, 2012",
        description: "Worked as software engineer"
    }],
    display: function() {
    	var entries = [];
        this.jobs.forEach(function(job) {
            var _items = [];
            _items.push(HTMLworkEmployer.replace("%data%", job.employer));
            _items.push(HTMLworkTitle.replace("%data%", job.title));
            _items.push(HTMLworkLocation.replace("%data%", job.location));
            _items.push(HTMLworkDates.replace("%data%", job.dates));
            _items.push(HTMLworkDescription.replace("%data%", job.description));
            entries.push($(HTMLworkStart).append(_items));
        });

        $("#workExperience").append(entries);
    }
};


projects = {
    projects: [{
        title: "Udesk OSS",
        dates: "Sep, 2016 - Dec, 2016",
        description: "Bill Management of udesk",
        images: ["images/projs/oss_01.jpg", "images/projs/oss_02.jpg"]
    }, {
        title: "Udesk",
        dates: "June, 2015 - Sep, 2016",
        description: "Udesk.cn is a platform of help desk deployed as Saas",
        images: ["images/projs/udesk_01.jpg", "images/projs/udesk_02.jpg", "images/projs/udesk_03.jpg"]
    }],
    display: function() {
        this.projects.forEach(function(proj) {
            var _items = [];
            _items.push(HTMLprojectTitle.replace("%data%", proj.title));
            _items.push(HTMLprojectDates.replace("%data%", proj.dates));
            _items.push(HTMLprojectDescription.replace("%data%", proj.description));

            var img_entries = "";
            proj.images.forEach(function(img_src) {
                img_entries += HTMLprojectImage.replace("%data%", img_src);
            });

            var _imgs = $(HTMLprojectImages).append(img_entries);
            var _container = $(HTMLprojectStart).append(_items);
            _container.append(_imgs);
            $("#projects").append(_container);
        });
    }
};

site_map = {
    display: function() {
        $('#mapDiv').append(googleMap);
    }
};

bio.display();
work.display();
projects.display();
education.display();
site_map.display();

$(".img-list").on('click', 'li', function() {
    var width = $(this).width();
    var parentWidth = $(this).offsetParent().width();
    var percent = 100 * width / parentWidth;
    var item_pct = 100 / 3;
    $(this).siblings().css('width', item_pct + "%");
    if (percent < item_pct) {
        $(this).css("width", "100%");
    } else {
        $(this).css("width", item_pct + "%");
    }
});