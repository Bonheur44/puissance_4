let hand=true
let c=1
let stat=false
let joueur=document.querySelector('.joueur')
let ordinateur=document.querySelector('.ordinateur')
let cases=new Array(6)
for(let i=0;i<6;i++){cases[i]=new Array(7)}
let index=0
for(let i=0;i<6;i++){for(let j=0;j<7;j++){cases[i][j]=document.querySelectorAll('.row > div')[index]
index++}}
if(confirm('Voulez-vous avoir la main ?'))hand=true
else hand=false
class Player{constructor(nbrPions,color){this.nbrPions=nbrPions
this.color=color}
static update(ia,ordinateur,jo,joueur,hand){ia.nbrPions--
ordinateur.style.color='#000'
ordinateur.textContent=ordinateur.textContent.replace(/\d+/,`${ia.nbrPions}`)
joueur.style.color=`${jo.color}`
return!hand}
poserPion(i,j,cases,k){if(cases[0][j].style.backgroundColor!=''){return false}else{let c=0
while(c<=4){if(cases[c+1][j].style.backgroundColor==''){c++}
else break}
cases[c][j].style.background=k.color
return true}}}
let jo=new Player(21,'rgb(246, 36, 46)')
let ia=new Player(21,'rgb(13, 27, 233)')
if(hand){joueur.style.color=jo.color}else{ordinateur.style.color=ia.color}
let gagnerHorizontalement=(joueur)=>{let count=0
for(let i=0;i<6;i++){for(let j=0;j<7;j++){if(cases[i][j].style.backgroundColor==joueur.color)count++
else count=0
if(count==4){for(let y=j-3;y<=j;y++){cases[i][y].style.animationName='gagne'}
return true}}
count=0}
return false}
let gagnerVerticalement=(joueur)=>{let count=0
for(let j=0;j<7;j++){for(let i=0;i<6;i++){if(cases[i][j].style.backgroundColor==joueur.color)count++
else count=0
if(count==4){for(let x=i-3;x<=i;x++){cases[x][j].style.animationName='gagne'}
return true}}
count=0}
return false}
let gagnerDiagPrem=(joueur)=>{let count=0,x=0,y=0,l=0,m=0
for(let i=0;i<6;i++){for(let j=0;j<7;j++){x=i
y=j
while(x<6&&y<7){if(cases[x][y].style.backgroundColor==joueur.color)count++
else count=0
if(count==4){l=x-3
m=y-3
while(l<=x&&m<=y){cases[l][m].style.animationName='gagne'
l++
m++}
return true}
x++
y++}
count=0}
count=0}
return false}
let gagnerDiagDeux=(joueur)=>{let count=0,x=0,y=0
for(let i=0;i<6;i++){for(let j=0;j<7;j++){x=i
y=j
while(x>=0&&y<7){if(cases[x][y].style.backgroundColor==joueur.color)count++
else count=0
if(count==4)return true
x--
y++}
count=0}
count=0}
return false}
let gagner=(e)=>{setTimeout(function(){if(!stat){if(gagnerHorizontalement(jo)||gagnerVerticalement(jo)||gagnerDiagPrem(jo)||gagnerDiagDeux(jo)){alert('Vous avez gagné')
stat=true}
else if(gagnerHorizontalement(ia)||gagnerVerticalement(ia)||gagnerDiagPrem(ia)||gagnerDiagDeux(ia)){alert('Vous avez perdu contre l\'IA')
stat=true}
else if(jo.nbrPions==0&&ia.nbrPions==0){alert('Match nul')
stat=true}}},1)}
for(let i=0;i<6;i++){for(let j=0;j<7;j++){cases[i][j].addEventListener('transitionend',gagner)}}
for(let i=0;i<6;i++){for(let j=0;j<7;j++){if(c!=0&&!hand){res=ia.poserPion(Math.floor(Math.random()*6),Math.floor(Math.random()*7),cases,ia)
hand=Player.update(ia,ordinateur,jo,joueur,hand)
c--}
cases[i][j].addEventListener('click',()=>{if(hand){res=jo.poserPion(i,j,cases,jo)
if(res){hand=Player.update(jo,joueur,ia,ordinateur,hand)}}
if(!hand){if(c==0){action=actionGenerale(jo,ia,cases,hand)
if(action.length!=0){for(let k=0;k<action.length;k++){for(let l=0;l<action[k].length;l++){res=ia.poserPion(action[k][l].lig,action[k][l].col,cases,ia)
if(res){hand=Player.update(ia,ordinateur,jo,joueur,hand)
break}}
if(hand)break}}
while(!hand){let tab=[]
for(let k=0;k<7;k++){if(cases[0][k].style.backgroundColor=='')
tab.push(k)}
for(let k in tab){res=ia.poserPion(0,tab[k],cases,ia)
if(res){hand=Player.update(ia,ordinateur,jo,joueur,hand)
break}}
break}}
if(c!=0&&!hand){res=ia.poserPion(Math.floor(Math.random()*6),Math.floor(Math.random()*7),cases,ia)
hand=Player.update(ia,ordinateur,jo,joueur,hand)
c--}}})}}