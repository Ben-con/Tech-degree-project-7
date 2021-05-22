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
const dismissAlert = document.getElementsByClassName('pop-up-alert')
const hourly = document.getElementById('hourly')
const daily = document.getElementById('daily')
const weekly = document.getElementById('weekly')
const monthly = document.getElementById('monthly')
const rid = document.getElementById ('rid')
// ------------------------------------------------------
const time = document.querySelector ('#timezone')
const save = document.querySelector ('#save')
const clear = document.querySelector ('#cancel')

const saveTime = () =>{
    localStorage.setItem('time',time.value)
}

const storedTime = localStorage.getItem('time')

if (storedTime) {
    time.value = storedTime
}

const removeTime = () =>{
    localStorage.removeItem('time')}
// -------------------------------------------------------


const profile = document.querySelector ('#prof')

const saveProfile= () =>{
    localStorage.setItem('profile' ,profile.checked)
}

const storedProf = JSON.parse(localStorage.getItem('profile'))

if (storedProf) {
    profile.checked = storedProf
}

const removeProf = () =>{
    localStorage.removeItem('profile')
    
}

// -------------------------------------------------------

const email = document.querySelector ('#mail')

const saveEmail= () =>{
    localStorage.setItem('email' ,email.checked)
}

const storedemail = JSON.parse(localStorage.getItem('email'))

if (storedemail) {
    email.checked = storedemail
}

const removeEmail = () =>{
    localStorage.removeItem('email')
}



 clear.addEventListener('click',removeEmail)
clear.addEventListener('click',removeProf)
clear.addEventListener("click", removeTime)
save.addEventListener('click',saveTime)
save.addEventListener('click',saveProfile)
save.addEventListener('click',saveEmail)
save.addEventListener('click',() =>{
    alert("settings saved")
})

clear.addEventListener('click',() =>{
    alert("Settings cleared")
    time.value = "Select a timezone"
    profile.checked = false
    email.checked = false
})

daily.addEventListener('click', e =>{
    const ele = e.target;
    if (ele.classList.contains = ('traffic-link')) {
        daily.className =('traffic-link-active')
    }
    hourly.className =('traffic-link')
    weekly.className =('traffic-link')
    monthly.className =('traffic-link')
    trafficChart.data.datasets[0].data = [1200, 2500, 1500, 1500, 1390, 1800, 250, 1900, 1050, 1400,
        1500];
    trafficChart.update();
})

hourly.addEventListener('click', e =>{
    const ele = e.target;
    if (ele.classList.contains = ('traffic-link')) {
        hourly.className =('traffic-link-active')
    }
    daily.className =('traffic-link')
    weekly.className =('traffic-link')
    monthly.className =('traffic-link')
    trafficChart.data.datasets[0].data = [750, 1250, 1000, 2000, 1500, 1750, 1250, 1850, 2250, 1500,
        2500]
    trafficChart.update();
})

weekly.addEventListener('click', e =>{
    const ele = e.target;
    if (ele.classList.contains = ('traffic-link')) {
        weekly.className =('traffic-link-active')
    }
    daily.className =('traffic-link')
    hourly.className =('traffic-link')
    monthly.className =('traffic-link')
    trafficChart.data.datasets[0].data = [200, 1500, 1000, 2500, 1590, 800, 1250, 1600, 1250, 1500,
        500];
    trafficChart.update();
})

monthly.addEventListener('click', e =>{
    const ele = e.target;
    if (ele.classList.contains = ('traffic-link')) {
        monthly.className =('traffic-link-active')
    }
    daily.className =('traffic-link')
    hourly.className =('traffic-link')
    weekly.className =('traffic-link')
    trafficChart.data.datasets[0].data = [1400, 2000, 1000, 1500, 1890, 1750, 1500, 1850, 2250, 2500,
        2500];
    trafficChart.update();
    
})



popup[0].addEventListener('click', () => {
     popUpBox.classList.add('active')
     overlay.classList.add('active') 
     for (i = 0 ;i < dismissAlert.length; i++){
         dismissAlert[i].style.display = 'flex'
        }
        rid.classList.remove('pop-up-alert')
         
})


closeAlert[0].addEventListener('click', () =>{
    popUpBox.classList.remove('active')
    overlay.classList.remove('active')
})

for (i = 0 ;i < dismissAlert.length; i++){
dismissAlert[i].addEventListener('click', e =>{
    const eve = e.target
    if (eve.className = ('pop-up-alert')) {
        eve.style.display = "none"
        
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
    duration: 1000
    },
    fill: true,
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
                            aspectRatio: 2,
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
        } else if (userSearch.value === "Select a Member" ) {
        alert("Please fill out user field before sending");
        } else if (messageField.value === "" ) {
        alert("Please fill out message field before sending");
        
        } else {
        alert(`Message successfully sent to: ${userSearch.value}`);
        messageField.value = ""
        userSearch.value = 'Select a Member'
        }
        });

       








        const tags = [ 
            'Dale Byrd',
            'Dan Oliver',
            'Dawn Wood',
            'Victoria Chambers'

              ];
             const n= tags.length;    
          
             function ac(value) {
                document.getElementById('datalist').innerHTML = '';
                 l=value.length;
             for (var i = 0; i<n; i++) {
                 if(((tags[i].toLowerCase()).indexOf(value.toLowerCase()))>-1)
                 {
                     const node = document.createElement("option");
                     const val = document.createTextNode(tags[i]);
                      node.appendChild(val);
          
                       document.getElementById("datalist").appendChild(node);
                     }
                 }
             }

           