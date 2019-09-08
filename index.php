
		<?php 

$name = $_POST['name'];
$email = $_POST['email'];
$messageTitle = $_POST['messageTitle'];
$message = $_POST['message'];
$content =PHP_EOL. "Name: " . $name. PHP_EOL. "Email: ". $email. PHP_EOL. "Message Title: " . $messageTitle. PHP_EOL. "Message: ". $message . PHP_EOL;
$fp = fopen('messages.txt', "a");
fwrite($fp, $content);
fclose($fp);

echo "<p> Thank you ". $name . ", your message has been sent! </p>";
echo "<a href="."messages.txt>All sent messages</a>";
		?>