const cities = ['Jakarta', 'Bandung', 'Cirebon', 'Semarang', 'Yogyakarta', 'Surabaya'];
const routes = [
  ['Jakarta','Yogyakarta',8.5,285000],['Jakarta','Semarang',7,245000],['Jakarta','Bandung',3,125000],
  ['Bandung','Yogyakarta',8,275000],['Bandung','Cirebon',3.5,155000],['Cirebon','Semarang',4.5,175000],
  ['Semarang','Surabaya',5.5,215000],['Yogyakarta','Surabaya',6.5,235000],['Jakarta','Surabaya',11.5,365000]
];
const classes = [
  {id:'executive',name:'Executive',seat:'Reclining seat',layout:'2 + 2',rows:10,letters:['A','B',null,'C','D'],capacity:40,multiplier:1,features:'AC · Reclining seat · USB'},
  {id:'super',name:'Super Executive',seat:'Leg rest',layout:'2 + 1',rows:10,letters:['A','B',null,'C'],capacity:30,multiplier:1.35,features:'AC · Leg rest · USB'},
  {id:'royal',name:'Royal Executive',seat:'Sleeper',layout:'1 + 1',rows:10,letters:['A',null,'B'],capacity:20,multiplier:1.85,features:'AC · Sleeper · USB'}
];
const sharedFacilities = 'Toilet khusus BAK · Smoking room · Dispenser air panas gratis';
const trips = routes.flatMap(([from,to,hours,basePrice], index) => classes.flatMap((busClass,classIndex) => [
  {id:`${index}-a-${busClass.id}`,from,to,hours,price:Math.round(basePrice*busClass.multiplier/5000)*5000,time:['07:00','17:30','20:00'][classIndex],busClass,offset:classIndex},
  {id:`${index}-b-${busClass.id}`,from:to,to:from,hours,price:Math.round(basePrice*busClass.multiplier/5000)*5000,time:['08:30','18:45','21:00'][classIndex],busClass,offset:classIndex+1}
]));

export {cities,routes,classes,sharedFacilities,trips};
