<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8" />
	<meta name="viewport" content="width=device-width,initial-scale=1.0,maximum-scale=1.0">
	<title>Big Fish</title>
	<link href="fontawesome/css/all.min.css" rel="stylesheet">
	<link href="fontawesome/css/fontawesome.min.css" rel="stylesheet">	
	<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@5.15.4/css/fontawesome.min.css" integrity="sha384-jLKHWM3JRmfMU0A5x5AkjWkw/EYfGUAGagvnfryNV3F9VqM98XiIH7VBGVoxVSc7" crossorigin="anonymous">
	<link href="css/style.css" rel="stylesheet">
	<link rel="preconnect" href="https://fonts.googleapis.com">
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
	<link href="https://fonts.googleapis.com/css2?family=Courgette&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap" rel="stylesheet">
</head>
<body>

<header class="fixed flex">
	<div class="container flex">
	   <a href="home" class="header_logo"></a>
	   <i class="fa-solid fa-bars"></i>
	   <nav class="menu flex">
	       <ul class="flex">
               <li><a href="home">Unidades</a></li>
               <li><a href="sobre_nos">Sobre nós</a></li>
               <li><a href="produtos">Produtos</a></li>
	       </ul>
        </nav>
	</div>
</header>

<main class="flex">
<?php
	if(isset($_GET['url'])){
		if(file_exists($_GET['url']).'.html'){
			include($_GET['url'].'.html');
		}else{
			include('404.html');
		}
	}else{
		include('home.html');
	}
?>
</main>


<footer class="flex fixed">
	<div class="container flex">
	    <p>© 2023 - BIG FISH - <a href="#">www.bigfishpescados.com.br</a></p>
	    <a target="_blank" href="https://github.com/filipelperes">filipelperes</a>
	</div>
</footer>
<script src="js/jquery.js"></script>
<script src="js/functions.js"></script>
<script>
	$(document).ready(() => {
		$('.modal-unit button.gja').css('background-color', '#ca5c47')
		$('.modal-unit button.gja').css('color', '#fff')
		$('.modal-unit button.gja').css('font-weight', 'bold')
	})
</script>
</body>
</html>