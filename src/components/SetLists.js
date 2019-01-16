import React from 'react';

export default function setOptions(props) {
    
    return (
    <select className="form-control label-select" value={props.set} onChange={props.changeSet}>
        <option value="default">Select Card Set if Known</option>
        <option value="Aether Revolt">Aether Revolt</option>
        <option value="Alara Reborn">Alara Reborn</option>
        <option value="Alliances">Alliances</option>
        <option value="Amonkhet">Amonkhet</option>
        <option value="Antiquities">Antiquities</option>
        <option value="Apocalypse">Apocalypse</option>
        <option value="Arabian Nights">Arabian Nights</option>
        <option value="Archenemy">Archenemy</option>
        <option value="Archenemy: Nicol Bolas">Archenemy: Nicol Bolas</option>
        <option value="Avacyn Restored">Avacyn Restored</option>
        <option value="Battle for Zendikar">Battle for Zendikar</option>
        <option value="Battle Royale Box Set">Battle Royale Box Set</option>
        <option value="Battlebond">Battlebond</option>
        <option value="Beatdown Box Set">Beatdown Box Set</option>
        <option value="Betrayers of Kamigawa">Betrayers of Kamigawa</option>
        <option value="Born of the Gods">Born of the Gods</option>
        <option value="Champions of Kamigawa">Champions of Kamigawa</option>
        <option value="Chronicles">Chronicles</option>
        <option value="Classic Sixth Edition">Classic Sixth Edition</option>
        <option value="Coldsnap">Coldsnap</option>
        <option value="Commander 2013 Edition">Commander 2013 Edition</option>
        <option value="Commander 2014">Commander 2014</option>
        <option value="Commander 2015">Commander 2015</option>
        <option value="Commander 2016">Commander 2016</option>
        <option value="Commander 2017">Commander 2017</option>
        <option value="Commander 2018">Commander 2018</option>
        <option value="Commander Anthology">Commander Anthology</option>
        <option value="Commander Anthology 2018">Commander Anthology 2018</option>
        <option value="Commander's Arsenal">Commander's Arsenal</option>
        <option value="Conflux">Conflux</option>
        <option value="Conspiracy: Take the Crown">Conspiracy: Take the Crown</option>
        <option value="Core Set 2019">Core Set 2019</option>
        <option value="Dark Ascension">Dark Ascension</option>
        <option value="Darksteel">Darksteel</option>
        <option value="Dissension">Dissension</option>
        <option value="Dominaria">Dominaria</option>
        <option value="Dragon's Maze">Dragon's Maze</option>
        <option value="Dragons of Tarkir">Dragons of Tarkir</option>
        <option value="Duel Decks Anthology, Divine vs. Demonic">Duel Decks Anthology, Divine vs. Demonic</option>
        <option value="Duel Decks Anthology, Elves vs. Goblins">Duel Decks Anthology, Elves vs. Goblins</option>
        <option value="Duel Decks Anthology, Garruk vs. Liliana">Duel Decks Anthology, Garruk vs. Liliana</option>
        <option value="Duel Decks Anthology, Jace vs. Chandra">Duel Decks Anthology, Jace vs. Chandra</option>
        <option value="Duel Decks: Ajani vs. Nicol Bolas">Duel Decks: Ajani vs. Nicol Bolas</option>
        <option value="Duel Decks: Blessed vs. Cursed">Duel Decks: Blessed vs. Cursed</option>
        <option value="Duel Decks: Divine vs. Demonic">Duel Decks: Divine vs. Demonic</option>
        <option value="Duel Decks: Elspeth vs. Kiora">Duel Decks: Elspeth vs. Kiora</option>
        <option value="Duel Decks: Elspeth vs. Tezzeret">Duel Decks: Elspeth vs. Tezzeret</option>
        <option value="Duel Decks: Elves vs. Goblins">Duel Decks: Elves vs. Goblins</option>
        <option value="Duel Decks: Elves vs. Inventors">Duel Decks: Elves vs. Inventors</option>
        <option value="Duel Decks: Garruk vs. Liliana">Duel Decks: Garruk vs. Liliana</option>
        <option value="Duel Decks: Heroes vs. Monsters">Duel Decks: Heroes vs. Monsters</option>
        <option value="Duel Decks: Izzet vs. Golgari">Duel Decks: Izzet vs. Golgari</option>
        <option value="Duel Decks: Jace vs. Chandra">Duel Decks: Jace vs. Chandra</option>
        <option value="Duel Decks: Jace vs. Vraska">Duel Decks: Jace vs. Vraska</option>
        <option value="Duel Decks: Knights vs. Dragons">Duel Decks: Knights vs. Dragons</option>
        <option value="Duel Decks: Merfolk vs. Goblins">Duel Decks: Merfolk vs. Goblins</option>
        <option value="Duel Decks: Mind vs. Might">Duel Decks: Mind vs. Might</option>
        <option value="Duel Decks: Nissa vs. Ob Nixilis">Duel Decks: Nissa vs. Ob Nixilis</option>
        <option value="Duel Decks: Phyrexia vs. the Coalition">Duel Decks: Phyrexia vs. the Coalition</option>
        <option value="Duel Decks: Sorin vs. Tibalt">Duel Decks: Sorin vs. Tibalt</option>
        <option value="Duel Decks: Speed vs. Cunning">Duel Decks: Speed vs. Cunning</option>
        <option value="Duel Decks: Venser vs. Koth">Duel Decks: Venser vs. Koth</option>
        <option value="Duel Decks: Zendikar vs. Eldrazi">Duel Decks: Zendikar vs. Eldrazi</option>
        <option value="Eighth Edition">Eighth Edition</option>
        <option value="Eldritch Moon">Eldritch Moon</option>
        <option value="Eternal Masters">Eternal Masters</option>
        <option value="Eventide">Eventide</option>
        <option value="Exodus">Exodus</option>
        <option value="Explorers of Ixalan">Explorers of Ixalan</option>
        <option value="Fallen Empires">Fallen Empires</option>
        <option value="Fate Reforged">Fate Reforged</option>
        <option value="Fifth Dawn">Fifth Dawn</option>
        <option value="Fifth Edition">Fifth Edition</option>
        <option value="Fourth Edition">Fourth Edition</option>
        <option value="From the Vault: Angels">From the Vault: Angels</option>
        <option value="From the Vault: Annihilation (2014)">From the Vault: Annihilation (2014)</option>
        <option value="From the Vault: Dragons">From the Vault: Dragons</option>
        <option value="From the Vault: Exiled">From the Vault: Exiled</option>
        <option value="From the Vault: Legends">From the Vault: Legends</option>
        <option value="From the Vault: Lore">From the Vault: Lore</option>
        <option value="From the Vault: Realms">From the Vault: Realms</option>
        <option value="From the Vault: Relics">From the Vault: Relics</option>
        <option value="From the Vault: Transform">From the Vault: Transform</option>
        <option value="From the Vault: Twenty">From the Vault: Twenty</option>
        <option value="Future Sight">Future Sight</option>
        <option value="Game Night">Game Night</option>
        <option value="Gatecrash">Gatecrash</option>
        <option value="Gift Pack">Gift Pack</option>
        <option value="Global Series: Jiang Yanggu and Mu Yanling">Global Series: Jiang Yanggu and Mu Yanling</option>
        <option value="Guild Kit: Boros">Guild Kit: Boros</option>
        <option value="Guild Kit: Dimir">Guild Kit: Dimir</option>
        <option value="Guild Kit: Golgari">Guild Kit: Golgari</option>
        <option value="Guild Kit: Izzet">Guild Kit: Izzet</option>
        <option value="Guild Kit: Selesnya">Guild Kit: Selesnya</option>
        <option value="Guildpact">Guildpact</option>
        <option value="Guilds of Ravnica">Guilds of Ravnica</option>
        <option value="Guilds of Ravnica Mythic Edition">Guilds of Ravnica Mythic Edition</option>
        <option value="Homelands">Homelands</option>
        <option value="Hour of Devastation">Hour of Devastation</option>
        <option value="Ice Age">Ice Age</option>
        <option value="Iconic Masters">Iconic Masters</option>
        <option value="Innistrad">Innistrad</option>
        <option value="Invasion">Invasion</option>
        <option value="Ixalan">Ixalan</option>
        <option value="Journey into Nyx">Journey into Nyx</option>
        <option value="Judgment">Judgment</option>
        <option value="Kaladesh">Kaladesh</option>
        <option value="Khans of Tarkir">Khans of Tarkir</option>
        <option value="Legends">Legends</option>
        <option value="Legions">Legions</option>
        <option value="Limited Edition Alpha">Limited Edition Alpha</option>
        <option value="Limited Edition Beta">Limited Edition Beta</option>
        <option value="Lorwyn">Lorwyn</option>
        <option value="Magic 2010">Magic 2010</option>
        <option value="Magic 2011">Magic 2011</option>
        <option value="Magic 2012">Magic 2012</option>
        <option value="Magic 2013">Magic 2013</option>
        <option value="Magic 2014 Core Set">Magic 2014 Core Set</option>
        <option value="Magic 2015 Core Set">Magic 2015 Core Set</option>
        <option value="Magic Origins">Magic Origins</option>
        <option value="Magic: The Gathering-Commander">Magic: The Gathering-Commander</option>
        <option value="Magic: The Gathering—Conspiracy">Magic: The Gathering—Conspiracy</option>
        <option value="Masterpiece Series: Amonkhet Invocations">Masterpiece Series: Amonkhet Invocations</option>
        <option value="Masterpiece Series: Kaladesh Inventions">Masterpiece Series: Kaladesh Inventions</option>
        <option value="Masters 25">Masters 25</option>
        <option value="Masters Edition">Masters Edition</option>
        <option value="Masters Edition II">Masters Edition II</option>
        <option value="Masters Edition III">Masters Edition III</option>
        <option value="Masters Edition IV">Masters Edition IV</option>
        <option value="Mercadian Masques">Mercadian Masques</option>
        <option value="Mirage">Mirage</option>
        <option value="Mirrodin">Mirrodin</option>
        <option value="Mirrodin Besieged">Mirrodin Besieged</option>
        <option value="Modern Event Deck 2014">Modern Event Deck 2014</option>
        <option value="Modern Masters">Modern Masters</option>
        <option value="Modern Masters 2015 Edition">Modern Masters 2015 Edition</option>
        <option value="Modern Masters 2017 Edition">Modern Masters 2017 Edition</option>
        <option value="Morningtide">Morningtide</option>
        <option value="Nemesis">Nemesis</option>
        <option value="New Phyrexia">New Phyrexia</option>
        <option value="Ninth Edition">Ninth Edition</option>
        <option value="Oath of the Gatewatch">Oath of the Gatewatch</option>
        <option value="Odyssey">Odyssey</option>
        <option value="Onslaught">Onslaught</option>
        <option value="Planar Chaos">Planar Chaos</option>
        <option value="Planechase">Planechase</option>
        <option value="Planechase 2012 Edition">Planechase 2012 Edition</option>
        <option value="Planechase Anthology">Planechase Anthology</option>
        <option value="Planeshift">Planeshift</option>
        <option value="Portal">Portal</option>
        <option value="Portal Second Age">Portal Second Age</option>
        <option value="Portal Three Kingdoms">Portal Three Kingdoms</option>
        <option value="Premium Deck Series: Fire and Lightning">Premium Deck Series: Fire and Lightning</option>
        <option value="Premium Deck Series: Graveborn">Premium Deck Series: Graveborn</option>
        <option value="Premium Deck Series: Slivers">Premium Deck Series: Slivers</option>
        <option value="Promo set for Gatherer">Promo set for Gatherer</option>
        <option value="Prophecy">Prophecy</option>
        <option value="Ravnica Allegiance">Ravnica Allegiance</option>
        <option value="Ravnica Allegiance Mythic Edition">Ravnica Allegiance Mythic Edition</option>
        <option value="Ravnica: City of Guilds">Ravnica: City of Guilds</option>
        <option value="Return to Ravnica">Return to Ravnica</option>
        <option value="Revised Edition">Revised Edition</option>
        <option value="Rise of the Eldrazi">Rise of the Eldrazi</option>
        <option value="Rivals of Ixalan">Rivals of Ixalan</option>
        <option value="Saviors of Kamigawa">Saviors of Kamigawa</option>
        <option value="Scars of Mirrodin">Scars of Mirrodin</option>
        <option value="Scourge">Scourge</option>
        <option value="Seventh Edition">Seventh Edition</option>
        <option value="Shadowmoor">Shadowmoor</option>
        <option value="Shadows over Innistrad">Shadows over Innistrad</option>
        <option value="Shards of Alara">Shards of Alara</option>
        <option value="Signature Spellbook: Jace">Signature Spellbook: Jace</option>
        <option value="Starter 1999">Starter 1999</option>
        <option value="Starter 2000">Starter 2000</option>
        <option value="Stronghold">Stronghold</option>
        <option value="Tempest">Tempest</option>
        <option value="Tempest Remastered">Tempest Remastered</option>
        <option value="Tenth Edition">Tenth Edition</option>
        <option value="The Dark">The Dark</option>
        <option value="Theros">Theros</option>
        <option value="Time Spiral">Time Spiral</option>
        <option value="Time Spiral &quot;Timeshifted&quot;">Time Spiral "Timeshifted"</option>
        <option value="Torment">Torment</option>
        <option value="Ugin's Fate promos">Ugin's Fate promos</option>
        <option value="Ultimate Box Toppers">Ultimate Box Toppers</option>
        <option value="Ultimate Masters">Ultimate Masters</option>
        <option value="Unglued">Unglued</option>
        <option value="Unhinged">Unhinged</option>
        <option value="Unlimited Edition">Unlimited Edition</option>
        <option value="Unstable">Unstable</option>
        <option value="Urza's Destiny">Urza's Destiny</option>
        <option value="Urza's Legacy">Urza's Legacy</option>
        <option value="Urza's Saga">Urza's Saga</option>
        <option value="Vanguard">Vanguard</option>
        <option value="Vintage Masters">Vintage Masters</option>
        <option value="Visions">Visions</option>
        <option value="Weatherlight">Weatherlight</option>
        <option value="Welcome Deck 2016">Welcome Deck 2016</option>
        <option value="Welcome Deck 2017">Welcome Deck 2017</option>
        <option value="Worldwake">Worldwake</option>
        <option value="Zendikar">Zendikar</option>
        <option value="Zendikar Expeditions">Zendikar Expeditions</option>
    </select>
    )
}