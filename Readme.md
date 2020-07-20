# project-1-portfolio
First GA project.

# Project-Description

My first project for the General Assembly Software Engineering Immersive will consist of a personal portfolio website showcasing my skills and projects as a full stack developer. This website will be essential for when I begin to look for employment, collaborators on projects or begin to promote myself as a freelancer and display the value I bring to the table. With that said, nothing displays your skills and experience more than a fundamentally sound and functioning website, which ultimately will be my largest priority with this project.

At the bare minimum, my website will consist of three sections, the first being a brief biography of who I am and what my intentions are, then a display of the different projects I’ve worked on and lastly a contact form for visitors would like to reach out to me. If time permits, I will also include a testimonial section where I will display testimonies from people I’ve worked with in the past.

 When it comes to the layout of my website, I will be relying heavily on CSS flexbox and grid concepts to strategically place content on the browser where it makes most sense. This approach will be especially important because my website will be responsive to different display sizes, especially mobile. As far as the interactivity aspect of my website, I will be using Javascript to build an image slider for my projects section, a responsive hamburger menu that will help a user navigate my site and various mouse interactivity effects. The final version of my website will be deployed and accessible online either via Github Pages or Surge.

# Wireframes

Mobile -https://res.cloudinary.com/dfmeqlgua/image/upload/v1594612044/mobilewireframe_zi1mfl.png
Tablet -https://res.cloudinary.com/dfmeqlgua/image/upload/v1594612061/tabletwireframe_ibht6s.png
Desktop -https://res.cloudinary.com/dfmeqlgua/image/upload/v1594612077/desktopwireframe_tyzkxb.png

# Time/Priority Matrix

link -https://res.cloudinary.com/dfmeqlgua/image/upload/v1594612369/time_prioritymatrix_csbfao.jpg

# MVP/Post-MVP 

link -https://res.cloudinary.com/dfmeqlgua/image/upload/v1594612250/mvp_postmvp_xxb6mr.png

# Functional-Components

link -https://res.cloudinary.com/dfmeqlgua/image/upload/v1595265239/Screen_Shot_2020-07-20_at_1.09.07_PM_gsl5to.png

# Additional Libraries
-Jquery
-Google Fonts

# Code Snippet

This first code snippet is of the JS that allowed me to toggle between classes to have sequential parts to my hamburger menu. Toggling between classes was a new concept for me and i'm excited to further explore with it
link -https://res.cloudinary.com/dfmeqlgua/image/upload/v1595265270/Screen_Shot_2020-07-20_at_1.12.28_PM_vnjock.png

This next code snippet is of the media queries I did for my grid layouts. The reason I'm proud of this is because I ran into some obstacles which made figuring it out that much more rewarding
link -https://res.cloudinary.com/dfmeqlgua/image/upload/v1595265270/Screen_Shot_2020-07-20_at_9.42.49_AM_dpi1pz.png

# Issues and Resolutions

Here's a list of various issues I've encountered and resolutions I've came up with...

issue: hamburger menu crunching to close to my "welcome" banner
resolution: putting borders around everything and seeing that one of my opaque div elements was taking up all the space that was needed for my hamburger menu

issue: my projects title within my projects container wouldnt sit in the top center like it was suppose to because the structure would get complicated when i incorporated grid layouts across different screen sizes
resolution: taking my "projects" title out of the container that consisted of all my projects and created a separate div for my projects title alone to sit on top of my projects container

issue: navigation menu to appear the way it was intended across different screen sizes
resolution: figuring out exactly where i needed to implement display:none and where not to
