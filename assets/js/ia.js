let tri=(tab)=>{let n=0,tmp=0
    for(let i=tab.length-1;i>=0;i--){n=0
    while(n<i){if(tab[n].c<tab[n+1].c){tmp=tab[n]
    tab[n]=tab[n+1]
    tab[n+1]=tmp}
    n++}}
    return tab}
    let defense=(jo,ia,cases,hand)=>{let def=[]
    let defHorF=()=>{let count=0,res=undefined
    let func=(i,j)=>{if(j+1<7){if(i==5&&cases[i][j+1].style.backgroundColor==''){return{lig:i,col:j+1,c:3}}
    else if(i+1<5&&cases[i+1][j+1].style.backgroundColor!=''&&cases[i][j+1].style.backgroundColor==''){return{lig:i,col:j+1,c:3}}}
    return-1}
    for(let i=5;i>=0;i--){for(let j=0;j<7;j++){if(cases[i][j].style.backgroundColor==jo.color)count++
    else count=0
    res=func(i,j)
    if(count==3){if(res!=-1)return res}else if(count==2){if(j+2<7&&cases[i][j+1].style.backgroundColor==''&&cases[i][j+2].style.backgroundColor==jo.color){if(res!=-1)return res}}}
    count=0}
    return-1}
    if(defHorF()!=-1)def.push(defHorF())
    let defHorS=()=>{let count=0,res=undefined
    let funct=(i,j)=>{if(j-1>=0){if(i==5&&cases[i][j-1].style.backgroundColor==''){return{lig:i,col:j-1,c:3}}else if(i+1<5&&cases[i+1][j-1].style.backgroundColor!=''&&cases[i][j-1].style.backgroundColor==''){return{lig:i,col:j-1,c:3}}}
    return-1}
    for(let i=5;i>=0;i--){for(let j=6;j>=0;j--){if(cases[i][j].style.backgroundColor==jo.color)count++
    else count=0
    res=funct(i,j)
    if(count==3){if(res!=-1)return res}
    else if(count==2){if(j-2>=0&&cases[i][j-1].style.backgroundColor==''&&cases[i][j-2].style.backgroundColor==jo.color){if(res!=-1)return res}}}
    count=0}
    return-1}
    if(defHorS()!=-1)def.push(defHorS())
    let defVert=()=>{let count=0
    for(let j=0;j<7;j++){for(let i=5;i>=0;i--){if(cases[i][j].style.backgroundColor==jo.color)count++
    else count=0
    if(count==3){if(i-1>=0){if(cases[i][j].style.backgroundColor!=''&&cases[i-1][j].style.backgroundColor=='')return{lig:i-1,col:j,c:3}}}}
    count=0}
    return-1}
    if(defVert()!=-1)def.push(defVert())
    let defDiagPremF=()=>{let count=0,res=undefined,x=0,y=0
    let func=(i,j)=>{if(i-1>=0&&j+1<7){if(cases[i][j+1].style.backgroundColor!=''&&cases[i-1][j+1].style.backgroundColor==''){return{lig:i-1,col:j+1,c:3}}}
    return-1}
    for(let i=5;i>=0;i--){for(let j=0;j<7;j++){x=i
    y=j
    while(x>=0&&y<7){if(cases[x][y].style.backgroundColor==jo.color)count++
    else count=0
    res=func(x,y)
    if(count==3){if(res!=-1)return res}
    if(count==2){if(y+2<7&&x-2>=0&&cases[x-1][y+1].style.backgroundColor==''&&cases[x-2][y+2].style.backgroundColor==jo.color){if(res!=-1)return res}}
    if(count==1){if(y+3<7&&x-3>=0&&cases[x-1][y+1].style.backgroundColor==''&&cases[x-2][y+2].style.backgroundColor==jo.color&&cases[x-3][y+3].style.backgroundColor==jo.color){if(res!=-1)return res}}
    x--
    y++}
    count=0}
    count=0}
    return-1}
    if(defDiagPremF()!=-1)def.push(defDiagPremF())
    let defDiagPremS=()=>{let count=0,res=undefined,x=0,y=0
    let func=(i,j)=>{if(i==4){if(j+1<7&&cases[i+1][j+1].style.backgroundColor==''){return{lig:i+1,col:j+1,c:3}}}else if(i<4){if(j+1<7&&cases[i+2][j+1].style.backgroundColor!=''&&cases[i+1][j+1].style.backgroundColor==''){return{lig:i+1,col:j+1,c:3}}}
    return-1}
    for(let i=0;i<6;i++){for(let j=0;j<7;j++){x=i
    y=j
    while(x<6&&y<7){if(cases[x][y].style.backgroundColor==jo.color)count++
    else count=0
    res=func(x,y)
    if(count==3){if(res!=-1)return res}
    if(count==2){if(x+2<6&&y+2<7&&cases[x+1][y+1].style.backgroundColor==''&&cases[x+2][y+2].style.backgroundColor==jo.color){if(res!=-1)return res}}
    if(count==1){if(x+3<6&&y+3<7&&cases[x+1][y+1].style.backgroundColor==''&&cases[x+2][y+2].style.backgroundColor==jo.color&&cases[x+3][y+3].style.backgroundColor==jo.color){if(res!=-1)return res}}
    x++
    y++}
    count=0}
    count=0}
    return-1}
    if(defDiagPremS()!=-1)def.push(defDiagPremS())
    if(def.length!=0)return tri(def)
    else return undefined}
    let attaque=(jo,ia,cases,hand)=>{let att=[]
    let attHorF=()=>{let count=0,res=undefined
    let func=(i,j,count)=>{if(j+1<7){if(i==5&&cases[i][j+1].style.backgroundColor==''){return{lig:i,col:j+1,c:count}}else if(i+1<5&&cases[i+1][j+1].style.backgroundColor!=''&&cases[i][j+1].style.backgroundColor==''){return{lig:i,col:j+1,c:count}}}
    return-1}
    for(let i=5;i>=0;i--){for(let j=0;j<7;j++){if(cases[i][j].style.backgroundColor==ia.color)count++
    else count=0
    res=func(i,j,count)
    if(count==3&&res!=-1)return res
    if(count==2){if(j+2<7&&cases[i][j+1].style.backgroundColor==''&&cases[i][j+2].style.backgroundColor==ia.color){return{lig:i,col:j+1,c:3}}}
    if(count==1){if(j+3<7&&cases[i][j+1].style.backgroundColor==''&&cases[i][j+2].style.backgroundColor==ia.color&&cases[i][j+3].style.backgroundColor==ia.color){return{lig:i,col:j+1,c:3}}}
    if(count==2&&res!=-1)return res
    if(count==1&&res!=-1)return res}
    count=0}
    return-1}
    if(attHorF()!=-1)att.push(attHorF())
    let attHorS=()=>{let count=0,res=undefined
    let func=(i,j,count)=>{if(j-1>=0){if(i==5&&cases[i][j-1].style.backgroundColor==''){return{lig:i,col:j-1,c:count}}else if(i+1<5&&cases[i+1][j-1].style.backgroundColor!=''&&cases[i][j-1].style.backgroundColor==''){return{lig:i,col:j-1,c:count}}}
    return-1}
    for(let i=5;i>=0;i--){for(let j=6;j>=0;j--){if(cases[i][j].style.backgroundColor==ia.color)count++
    else count=0
    res=func(i,j,count)
    if(count==3&&res!=-1)return res
    if(count==2){if(j-2>=0&&cases[i][j-1].style.backgroundColor==''&&cases[i][j-2].style.backgroundColor==ia.color){return{lig:i,col:j-1,c:3}}}
    if(count==1){if(j-3>=0&&cases[i][j-1].style.backgroundColor==''&&cases[i][j-2].style.backgroundColor==ia.color&&cases[i][j-3].style.backgroundColor==ia.color){return{lig:i,col:j-1,c:3}}}
    if(count==2&&res!=-1)return res
    if(count==1&&res!=-1)return res}
    count=0}
    return-1}
    if(attHorS()!=-1)att.push(attHorS())
    let attVert=()=>{let count=0,res=undefined
    let func=(i,j,count)=>{if(i-1>=0){if(cases[i][j].style.backgroundColor==ia.color&&cases[i-1][j].style.backgroundColor=='')return{lig:i-1,col:j,c:count}}
    return-1}
    for(let j=0;j<7;j++){for(let i=5;i>=0;i--){if(cases[i][j].style.backgroundColor==ia.color)count++
    else count=0
    res=func(i,j,count)
    if(res!=-1){if(count==3)return res
    if(count==2){if(i-2>=0)return res}
    if(count==1){if(i-3>=0)return res}}}
    count=0}
    return-1}
    if(attVert()!=-1)att.push(attVert())
    let attDiagPremF=()=>{let count=0,res=undefined,x=0,y=0
    let func=(i,j,count)=>{if(i-1>=0&&j+1<7){if(cases[i][j+1].style.backgroundColor!=''&&cases[i-1][j+1].style.backgroundColor==''){return{lig:i-1,col:j+1,c:count}}}
    return-1}
    for(let i=5;i>=0;i--){for(let j=0;j<7;j++){x=i
    y=j
    while(x>=0&&y<7){if(cases[x][y].style.backgroundColor==ia.color)count++
    else count=0
    res=func(x,y,count)
    if(res!=-1){if(count==3)return res
    if(count==2){if(y+2<7&&x-2>=0&&cases[x-1][y+1].style.backgroundColor==''&&cases[x-2][y+2].style.backgroundColor==ia.color){return{lig:x-1,col:y+1,c:3}}}
    if(count==1){if(y+3<7&&x-3>=0&&cases[x-1][y+1].style.backgroundColor==''&&cases[x-2][y+2].style.backgroundColor==ia.color&&cases[x-3][y+3].style.backgroundColor==ia.color){return{lig:x-1,col:y+1,c:3}}}
    if(count==2)return res
    if(count==1)return res}
    x--
    y++}
    count=0}
    count=0}
    return-1}
    if(attDiagPremF()!=-1)att.push(attDiagPremF())
    let attDiagPremS=()=>{let count=0,res=undefined,x=0,y=0
    let func=(i,j,count)=>{if(i+1==5){if(j+1<7&&cases[i+1][j+1].style.backgroundColor==''){return{lig:i+1,col:j+1,c:count}}}else if(i+1<5&&j+1<7&&cases[i+2][j+1].style.backgroundColor!=''&&cases[i+1][j+1].style.backgroundColor==''){return{lig:i+1,col:j+1,c:count}}
    return-1}
    for(let i=0;i<6;i++){for(let j=0;j<7;j++){x=i
    y=j
    while(x<6&&y<7){if(cases[x][y].style.backgroundColor==ia.color)count++
    else count=0
    res=func(x,y,count)
    if(res!=-1){if(count==3)return res
    if(count==2){if(x+2<6&&y+2<7&&cases[x+1][y+1].style.backgroundColor==''&&cases[x+2][y+2].style.backgroundColor==ia.color)
    {return{lig:x+1,col:y+1,c:3}}}
    if(count==1){if(x+3<6&&y+3<7&&cases[x+1][y+1].style.backgroundColor==''&&cases[x+2][y+2].style.backgroundColor==ia.color&&cases[x+3][y+3].style.backgroundColor==ia.color)
    {return{lig:x+1,col:y+1,c:3}}}
    if(count==2)return res
    if(count==1)return res}
    x++
    y++}
    count=0}
    count=0}
    return-1}
    if(attDiagPremS()!=-1)att.push(attDiagPremS())
    if(att.length!=0)return tri(att)
    else return undefined}
    let actionGenerale=(jo,ia,cases,hand)=>{let action=[]
    let attack=attaque(jo,ia,cases,hand)
    let defens=defense(jo,ia,cases,hand)
    if(attack!=undefined&&attack[0].c==3){action.push(attack)
    return action}else
    if(defens!=undefined&&defens[0].c==3){action.push(defens)
    return action}else{if(defens!=undefined)action.push(defens)
    if(attack!=undefined)action.push(attack)
    return tri(action)}}