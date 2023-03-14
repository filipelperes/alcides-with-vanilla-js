<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8" />
	<meta name="viewport" content="width=device-width,initial-scale=1.0,maximum-scale=1.0">
	<title>Marmoraria Guarujá</title>	
	<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@5.15.4/css/fontawesome.min.css" integrity="sha384-jLKHWM3JRmfMU0A5x5AkjWkw/EYfGUAGagvnfryNV3F9VqM98XiIH7VBGVoxVSc7" crossorigin="anonymous">
	<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta2/css/all.min.css" integrity="sha512-YWzhKL2whUzgiheMoBFwW8CKV4qpHQAEuvilg9FAn5VJUDwKZZxkJNuGM4XkWuk94WCrrwslk8yWNGmY1EduTA==" crossorigin="anonymous" referrerpolicy="no-referrer" />
	<link href="fontawesome/css/all.min.css" rel="stylesheet">
	<link href="fontawesome/css/fontawesome.min.css" rel="stylesheet">	
	<link href="css/style.css" rel="stylesheet">
	<link rel="preconnect" href="https://fonts.googleapis.com">
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
	<link href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap" rel="stylesheet">
	<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/swiper@9/swiper-bundle.min.css"/>
	<script type="module" src="js/produtos/produtos.js"></script>
</head>
<body class="flex column">

<header class="sitcky">
	<div class="container flex column">
		<a class="img-logo border-radius">
			<img src="imgs/logo.png">
		</a>
		<nav class="menu flex border-radius">
			<ul class="flex">
				<li><a href="home">Produtos</a></li>
				<li><a href="sobre_nos">Sobre Nós</a></li>
			</ul>
		</nav>
	</div>
</header>

<main>
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

<footer>
	<div class="container flex">
		<p>Copyright © 2023 - Marmoraria Guarujá - Todos os Direitos Reservados</p>
		<a target="_blank" href="https://github.com/filipelperes">filipelperes</a>
	</div>
</footer>

<script src="https://cdn.jsdelivr.net/npm/swiper@9/swiper-bundle.min.js"></script>
<script src="js/jquery.js"></script>
<script>
	jQuery.noConflict()
</script>
<script src="js/functions.js"></script>
</body>
</html>