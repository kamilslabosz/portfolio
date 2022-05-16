$('#js-skills').hide();
$('#other-skills').hide();

$('#PSkills').click(function(){
   $('#python-skills').fadeIn();
   $('#js-skills').hide();
   $('#other-skills').hide();
});

$('#JSSkills').click(function(){
   $('#python-skills').hide();
   $('#js-skills').fadeIn();
   $('#other-skills').hide();
});

$('#OSkills').click(function(){
   $('#python-skills').hide();
   $('#js-skills').hide();
   $('#other-skills').fadeIn();
});
