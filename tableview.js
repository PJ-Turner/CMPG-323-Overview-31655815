var win = Ti.UI.currentWindow;
win.backgroundColor = '#000';

// vars
var data = [];
var h1 = 0;
var h1a = [];
var index =[];
var i = 0;


for(z=0;z<20;z++){

	var famName = 'row' + z;	
	
// This is the custom header as prescribed in kitchensink and working in 1.2.0/1.3.0
var header = Ti.UI.createView({
		backgroundColor:'#b6c1ad',
		height:'25px'
	});

var headerLabel = Ti.UI.createLabel({
	font:{fontFamily:'Helvetica Neue',fontSize:0},
	text:h1,
	color:'#fff',
	width:'auto',
	height:'auto'
});

header.add(headerLabel);

var section = Ti.UI.createTableViewSection();
section.headerView = header;

data.push(section);

// Row elements	
	var row = Ti.UI.createTableViewRow();
	var famLabel = Ti.UI.createLabel({
		text:famName,
		top:'auto',
		left:67,
		width:'auto',
		height:'auto',
		color:'#333',
		font:{fontSize:14,fontWeight:'bold'}
	});
	row.add(famLabel);

	
	row.height = 65;
	row.selectedBackgroundColor = '#3b6619';
	row.hasChild = true;
	row.familyName = famName;
	
	row.className = 'row' + i;
	
	
	data.push(row);

	// push something into index
	h1a.push({title:h1.toString(),index:h1});
	
	h1++;
	i++;
	
}



// create table view and add to page
var tableview = Titanium.UI.createTableView({
	top:44,
	data:data,
	height:366
});

win.add(tableview);

// index
for (var i=0; i<h1a.length;i++) { 
	index.push({title:h1a[i].title, index:h1a[i].index}); 
}



tableview.index = index;
