const banner = document.getElementById('banner')
const trafficCanvas = document.getElementById('traffic-chart')
const dailyBar = document.getElementById('bar')
const mobile = document.getElementById('pie')
const userSearch = document.getElementById('user-search')
const messageField = document.getElementById('messageField')
const send = document.getElementById('send')
const change = document.querySelectorAll('.traffic-nav li')
const popup = document.getElementsByClassName('svg-image')
const closeAlert = document.getElementsByClassName('pop-button-close')
const overlay = document.getElementById('overlay')
const popUpBox = document.getElementById('pop-up')
const dismissAlert = document.getElementsByClassName('pop-button')

popup[0].addEventListener('click', () => {
     popUpBox.classList.add('active')
     overlay.classList.add('active') 
})


closeAlert[0].addEventListener('click', () =>{
    popUpBox.classList.remove('active')
    overlay.classList.remove('active')
})
for (i = 0; i < dismissAlert.length; i++){
dismissAlert[i].addEventListener('click', e =>{
    const button = e.target
    if(button.classList.contains = ('pop-button')){
        dismissAlert[i].style.display = "none"
    }
})
}



let trafficData = {
    labels:["16-22","23-29","30-5","6-12","13-19","20-26","27-3","4-10","11-17","18-24","25-31"],
    datasets:[{
        data: [750, 1250, 1000, 2000, 1500, 1750, 1250, 1850, 2250, 1500,
            2500],
            backgroundColor: 'rgba(116, 119, 191, .3)',
            borderWidth: 1,
    }]
};


let trafficOptions = {
    aspectRatio: 2.5,
    animation: {
    duration: 0
    },
    scales: {
    y: {
    beginAtZero: true
    }
    },
    plugins: {
        legend: {
            display: false
            }
            }
            };


            let trafficChart = new Chart(trafficCanvas, {
                type: 'line',
                data: trafficData,
                options: trafficOptions
             });




  const dailyData = {
                labels: ["S", "M", "T", "W", "T", "F", "S"],
                datasets: [{
                label: '# of Hits',
                data: [75, 115, 175, 125, 225, 200, 100],
                backgroundColor: '#7477BF',
                borderWidth: 1
                }]
                };
                const dailyOptions = {
                scales: {
                y: {
                beginAtZero: true
                }
                },
                plugins: {
                legend: {
                display: false
                }
                }
                };



                let dailyChart = new Chart(dailyBar, {
                    type: 'bar',
                    data: dailyData,
                    options: dailyOptions
                    });
 
  
  
  
  
     const mobileData = {
                        labels: ["Desktop", "Tablet", "Phones"],
                        datasets: [{
                        label: '# of Users',
                        data: [2000, 550, 500],
                        borderWidth: 0,
                        backgroundColor: [
                        '#7477BF',
                        '#78CF82',
                        '#51B6C8'
                        ]
                        }]
                        };


                        const mobileOptions = {
                            plugins: {
                            legend: {
                            position: 'right',
                            labels: {
                            boxWidth: 20,
                            fontStyle: 'bold'
                            }
                            }
                            }
                            };


                            let mobileChart = new Chart(mobile, {
                                type: 'doughnut',
                                data: mobileData,
                                options: mobileOptions
                                });


// ------------------------- Making alert banner ----------------------
banner.innerHTML =
`
<div class="alert-banner">
<p><strong>Alert:</strong> You have <strong>6</strong> overdue tasks
to complete</p>
<p class="alert-banner-close">x</p>
</div>
`

banner.addEventListener('click', e =>{
    const element = e.target;
    if(element.classList.contains = ('alert-banner-close')){
        banner.style.display = "none"
    }
})
// --------------------------------------------------------------------














send.addEventListener('click', ()=>{
    if (userSearch.value === "" && messageField.value === "") {
        alert("Please fill out user and message fields before sending");
        } else if (userSearch.value === "" ) {
        alert("Please fill out user field before sending");
        
        } else if (messageField.value === "" ) {
        alert("Please fill out message field before sending");
        userSearch.value = ""
        } else {
        alert(`Message successfully sent to: ${userSearch.value}`);
        }
        });

        console.log(dismissAlert.length)
        console.log(messageField)
        console.log(userSearch)
