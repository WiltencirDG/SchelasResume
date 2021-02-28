$(document).ready(async function(){
    var resume = await $.getJSON('../data.json').then((res) => {return res})
    
    //BASIC
    $("#basic_name").text(resume.basic.name)
    $("#basic_title").text(resume.basic.title)

    //CONTACT
    $("#contact_mobile").text(resume.contact.mobile)
    $("#contact_email").text(resume.contact.email)
    $("#contact_github").text(resume.contact.github)
    $("#contact_linkedin").text(resume.contact.linkedin)
    $("#contact_website").text(resume.contact.website)

    // SKILLS
    resume.skills.forEach((e,i) => {
        var element = "<p class=\"normalColor\" id=\"skill_"+i+"\">"+e.skill+"</p>"
        $("#skills").append(element)
    })

    // COURSES
    resume.courses.forEach((e,i) => {
        var element = "<div class=\"courses normalColor\"><p class=\"courses_local\">"+e.local+"</p><p class=\"courses_title\">"+e.title+" -&nbsp<p class=\"courses_hours\">"+e.hours+"</p></p></div>"
        $("#courses").append(element)  
    })

    // EXPERIENCE
    resume.experience.forEach((e,i) => {
        var element = "<div class=\"experience normalColor\"><p class=\"experience_company\">"+e.company+"</p><p class=\"experience_position\">"+e.position+"</p><p class=\"experience_startDate highColor\">"+e.startDate+" -&nbsp<p class=\"experience_endDate highColor\">"+e.endDate+"</p></p><p class=\"experience_description\">"+e.description+"</p></div>"
        $("#experience").append(element)       
    })

    // EDUCATION
    resume.education.forEach((e,i) => {
        var element = "<div class=\"education normalColor\"><p class=\"education_local\">"+e.local+"</p><p class=\"education_title\">"+e.title+"</p><p class=\"education_startDate highColor\">"+e.startDate+" -&nbsp<p class=\"education_endDate highColor\">"+e.endDate+"</p></p></div>"
        $("#education").append(element)  
    })


    // LANGUAGES
    resume.languages.forEach((e,i) => {
        var element = "<div class=\"languages normalColor\"><p class=\"languages_title\">"+e.title+"</p><p class=\"languages_description\">"+e.description+"</p></div>"
        $("#languages").append(element)  
    })
})