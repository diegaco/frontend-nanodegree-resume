/*
This is empty on purpose! Your code to build the resume will go here.
 */


var bio = {
  name: 'Diego Acosta',
  role: 'Frontend Developer',
  contact: {
    'mobile': '098903819',
    'email': 'diegacosta211@gmail.com',
    'github': 'diegaco',
    'twitter': 'diegacosta211',
    'location': 'Salto, Uy'
  },
  avatar: 'images/avatar.jpg',
  msg: 'Hi, Im Diego Acosta, a Frontend Developer from Uruguay',
  skills: [
    'HTML', 'CSS', 'JS', 'Sass', 'Bootstrap', 'Grunt', 'Drupal'
  ]
}

var work = {
  jobs: [
    {
      employer: 'MercadoLibre',
      title: 'Frontend Developer',
      location: 'Montevideo, UY',
      dates: '10/10/12 - 10/10/14',
      descrption: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    },
    {
      employer: 'Pedidos Ya',
      title: 'Frontend Developer',
      location: 'Montevideo, UY',
      dates: '10/10/12 - 10/10/14',
      descrption: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    }
  ]
}

var projects = {
  projects: [
    {
      title: 'Sample Project1',
      dates: '10/10/12 - 10/10/14',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      image: 'https://placeholdit.imgix.net/~text?txtsize=33&txt=Project1&w=400&h=400'
    },
    {
      title: 'Sample Project2',
      dates: '10/10/12 - 10/10/14',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      image: 'https://placeholdit.imgix.net/~text?txtsize=33&txt=Project2&w=400&h=400'
    },
    {
      title: 'Sample Project3',
      dates: '10/10/12 - 10/10/14',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      image: 'https://placeholdit.imgix.net/~text?txtsize=33&txt=Project3&w=400&h=400'
    }
  ],
}

var education = {
  schools: [
    {
      name: 'Frontend Developer',
      location: 'Rosario, Colonia',
      degreeDates: '10/10/12 - 10/10/14',
      url: 'http://',
      majors: [
        'major1',
        'major2'
      ]
    },
    {
      name: 'Backend Developer',
      location: 'Rosario, Colonia',
      degreeDates: '10/10/11 - 10/10/13',
      url: 'http://',
      majors: [
        'major1',
      ]
    }
  ],
  onlineCourses: [
    {
      title: 'Frontend Developer',
      school: 'Team treehouse',
      dates: '20/12/13 - 20/01/14',
      url: 'http://www....'
    }
  ]
}


var formattedName = HTMLheaderName.replace('%data%', bio.name);
var formattedRole = HTMLheaderRole.replace('%data%', bio.role);

var contactMobile = HTMLcontactGeneric.replace('%data%', bio.contact.mobile);
contactMobile = contactMobile.replace('%contact%', 'Mobile');

var contactEmail = HTMLcontactGeneric.replace('%data%', bio.contact.email);
contactEmail = contactEmail.replace('%contact%', 'Email');

var contactGithub = HTMLcontactGeneric.replace('%data%', bio.contact.github);
contactGithub = contactGithub.replace('%contact%', 'Github');

var contactTwitter = HTMLcontactGeneric.replace('%data%', bio.contact.twitter);
contactTwitter = contactTwitter.replace('%contact%', 'Twitter');

var contactLocation = HTMLcontactGeneric.replace('%data%', bio.contact.location);
contactLocation = contactLocation.replace('%contact%', 'Location');

var bioPic = HTMLbioPic.replace('%data%', bio.avatar);
var welMsg = HTMLwelcomeMsg.replace('%data%', bio.msg);




$('#header').prepend(formattedName, formattedRole);
$('#topContacts').append(contactMobile, contactEmail, contactGithub, contactTwitter, contactLocation);
$('#header').append(bioPic, welMsg);

$('#main').append(internationalizeButton);

if (bio.skills.length) {
  $('#header').append(HTMLskillsStart);
  var skills = $('#skills');
  bio.skills.forEach(function(skill) {
    var skill = HTMLskills.replace('%data%', skill);
    skills.append(skill);
  });
}

var displayWork = function() {
  if (work.jobs.length) {
    $('#workExperience').append(HTMLworkStart);
    var workEntry = $('.work-entry:last');
    var jobDesc,
    currentJob,
    currentTitle,
    currentDate,
    currentDesc;

    // another loop
    for(job in work.jobs) {
      currentJob = HTMLworkEmployer.replace('%data%', work.jobs[job].employer);
      currentTitle = HTMLworkTitle.replace('%data%', work.jobs[job].title);
      currentDate = HTMLworkDates.replace('%data%', work.jobs[job].dates);
      currentDesc = HTMLworkDescription.replace('%data%', work.jobs[job].descrption);

      jobDesc = currentJob + currentTitle;
      console.log(currentJob +' - '+currentTitle);
      workEntry.append(jobDesc, currentDate, currentDesc);
    }
  }
}

var inName = function () {
  //return a name Internationalize - Diego ACOSTA
  var splittedName = bio.name.split(' ');
  var firstName = splittedName.shift();
  var lastName = splittedName.pop().toUpperCase();

  firstName = firstName.slice(0,1).toUpperCase() + firstName.slice(1).toLowerCase();
  splittedName.unshift(firstName);
  splittedName.push(lastName);
  $('#name').html(splittedName.join(' '));
}

$('#main > button').on('click', inName);

displayWork();

projects.display = function() {
  var $projects = $('#projects');
  var projectTitle,
      projectDates,
      projectDescription,
      projectImage;

  projects.projects.forEach(function(project) {
    var $projectEntry =  $(HTMLprojectStart);

    projectTitle = HTMLprojectTitle.replace('%data%', project.title);
    projectDates = HTMLprojectDates.replace('%data%', project.dates);
    projectDescription = HTMLprojectDescription.replace('%data%', project.description);
    projectImage = HTMLprojectImage.replace('%data%', project.image);
    $projectEntry.append(projectTitle, projectDates, projectDescription, projectImage);
    $projects.append($projectEntry);
  });
}
projects.display();
