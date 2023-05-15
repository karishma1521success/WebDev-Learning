let data = JSON.stringify(leaderBoardArr); // It will convert arr into the string because fs.writeFileSync function needs data to be in string format
fs.writeFileSync('batsmanStats.json' , data);