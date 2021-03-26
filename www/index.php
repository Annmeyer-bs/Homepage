<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<link href="css/style.css" rel="stylesheet">
	<title>Document</title>
</head>
<body>	
<div class="container">
	<?php	require	"block/header.php";	?>
	<div class="container__form">
		<div class="container__banner">
			<div class="container__banner-text">
				<div class="container__banner-text-title">
				<a href="">Admire Stylish Dresses & Looks</a>
				<p>If we wanted to build a human-level tool to offer 
automated outfit advice, we needed to understand 
people’s fashion taste. </p>
				<button>Show More</button>
				</div>
			</div>
		</div>
		<div class="container__form-temp">
			<?php	require	"block/w-c.php";	?>
			<?php	require	"block/p-l.php";	?>
			<?php	require	"block/y-m-l.php";	?>
		</div>
	</div>
	<?php	require	"block/footer.php";	?>
</div>
	
	<script src="https://kit.fontawesome.com/e552c67050.js" crossorigin="anonymous"></script>
	<script type="text/javascript" src="//code.jquery.com/jquery-3.6.0.min.js"></script>
	<script type="text/javascript" src="js/slick.min.js"></script>
	<script	src="js/script.js"></script>
</body>
</html>
