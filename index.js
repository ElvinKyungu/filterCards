const input = document.getElementById('input');
let notResult = document.querySelector('.notresult');
let containerCard = document.querySelector('.cards-container');
let resultat = document.getElementById('resultat');
var datas= [
    {id:1, nom: "Vander", img:"assets/images/a.jpg"},
    {id:2, nom: "Elvin", img:"assets/images/a.jpg"},
    {id:3, nom: "Marie", img:"assets/images/a.jpg"},
    {id:4, nom: "Prince", img:"assets/images/a.jpg"},
    {id:5, nom: "Kyungu", img:"assets/images/a.jpg"},
    {id:6, nom: "deoel", img:"assets/images/a.jpg"},
    {id:7, nom: "jonathan", img:"assets/images/a.jpg"},
    {id:8, nom: "Daniel", img:"assets/images/a.jpg"},
    {id:9, nom: "Salama", img:"assets/images/a.jpg"},
    {id:10, nom: "Idris", img:"assets/images/a.jpg"},
]

let card;

function afficherCard(datas){
    containerCard.innerHTML = '';
    for (i =0; i<datas.length; i++){
        card = `
            <div class="card">
                <img src="${datas[i].img}" alt="">
                <div class="content">
                    <span>${datas[i].nom}</span>
                </div>
            </div>  
        `;
        containerCard.insertAdjacentHTML("beforeend", card)
    }
    if(datas.length > 1){
        resultat.innerText = datas.length+' Résultats'
    }else{
        resultat.innerText = datas.length+' Résultat'
    }
}


afficherCard(datas);

input.addEventListener('input', ()=>{
    let arr = datas.filter((data) => {
        notResult.classList.remove('active');
        return data.nom.toLowerCase().includes(input.value.toLowerCase()) == true;
    })
    afficherCard(arr);
    if(arr.length > 1){
        resultat.innerText = arr.length+' Résultats'
    }else{
        resultat.innerText = arr.length+' Résultat'
        containerCard.style.boxShadow = '5px 5px 25px 5px rgba(0,0,0,0.2)';
    }
    if(arr.length < 1){
        containerCard.innerHTML = '';
        containerCard.style.boxShadow = 'none'
        notResult.innerHTML = "<h3>Désolé</h3> <span>Aucun résultat trouvé !</span>";
        notResult.classList.add('active');
    }
   
})