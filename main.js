{ console.log('loaded js') }

const heroes = [
    {
        name: 'grimreaper',
        type: 'dwarf',
        damage: 5,
        health: 100,
        maxHealth: 100,
    },
    {
        name: 'flint',
        type: 'elf',
        damage: 10,
        health: 50,
        maxHealth: 50
    }
]


const boss = {
    health: 100,
    maxHealth: 100,
    damage: 5,
    level: 1
}


function bothAtt() {
    let totalAtt = 0
    heroes.forEach(h => {
        if (h.health > 0) {
            totalAtt += h.damage
        }
    })
    boss.health -= totalAtt
    if (boss.health <= 0) {
        boss.health = 0
        levelUp()
        console.log('boss leveled up')
    }
    console.log(boss.health);
    drawBossHealth()
}


function bossAtt() {
    heroes.forEach(h => {
        if (h.health > 0) {
            h.health = h.health - boss.damage
            console.log(h.health)
        }
    })
    drawHealth()
}

function levelUp() {
    boss.level++
    boss.health = boss.maxHealth * boss.level
    boss.damage = boss.level * 5
    console.log('boss.damage')
    timerAtt()
}


function timerAtt() {
    console.log('boss damage starting')
    let dmgInterval = setInterval(() => {
        if (boss.health > 0) bossAtt()
        console.log('boss damage ended')
    }, 5000)

    setTimeout(() => {
        console.log('boss damage ended')
        clearInterval(dmgInterval)
    }, 50000)
}
timerAtt()


function drawHealth() {
    heroes.forEach(h => {
        document.getElementById(h.name).querySelector('.progress-bar').style.width = h.health + '%'
    })
    console.log('heroes health -5')
}

function drawBossHealth() {
    document.getElementById('boss').querySelector('.progress-bar').style.width = boss.health + '%'
}
