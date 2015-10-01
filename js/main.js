
/* Retrieving current week
--------------------------------------------------------------------------------------------------*/
var Sun = Date.parse('last sunday').toString('dd');
var Mon = Date.mon().toString('dd');
var Tue = Date.tue().toString('dd');
var Wed = Date.wed().toString('dd');
var Thurs = Date.thursday().toString('dd');
var Fri = Date.fri().toString('dd');
var Sat = Date.sat().toString('dd');
var current_month = Date.today().toString('MMMM');
var week = {Sun, Mon, Tue, Wed, Thurs, Fri, Sat} //storing values in an array


/* Setting values on calenders
--------------------------------------------------------------------------------------------------*/
$('#month_display').html(current_month);
$('#mon').html(Mon)
$('#tue').html(Tue)
$('#wed').html(Wed)
$('#thurs').html(Thurs)
$('#fri').html(Fri)
$('#sat').html(Sat)
$('#sun').html(Sun)



/* Debuggin
--------------------------------------------------------------------------------------------------*/

console.log(Date.today().toString('HH:mm'));
