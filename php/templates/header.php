<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" href="../css/reset.css">
    <link rel="stylesheet" href="../css/style.css">
    <link rel="shortcut icon" href="#" /> 
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap" rel="stylesheet">
    <title>Spire</title>
</head>
<body>
    <header class="header">
        <div class="header__logo">
            <img src="../sources/logo.png" class="header__logo-spire" alt="logo Spire">
            <h1 class="header__title">Spire</h1>
        </div>
        <input id="searchbar" onkeyup="" type="text" name="search" placeholder="Rechercher une station...">
        <nav class="menu-header">
            <ul class="menu">
                <li class="menu__item"><a href="#">Accueil</a></li>
                <li class="menu__item"><a href="#">Stations</a></li>
                <li class="menu__item"><a href="#">Partenaires</a></li>
                <li class="menu__item"><a href="#">Contact</a></li>
                <li class="menu__item"><a href="#">Mon compte</a></li>
            </ul>
            <button class="hamburger">
                <i class="menu__icon"><img id="open-menu" src="../sources/images/001-materiel-de-ski-uncrossed.png"></i>
                <i class="close__icon"><img id="close-menu" src="../sources/images/001-materiel-de-ski-crossed.png"></i>
            </button>
        </nav>
    </header>