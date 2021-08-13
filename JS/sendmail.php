<?php
   use PHPMailer/PHPMailer/PHPMailer;
   use PHPMailer/PHPMailer/Exception;

   require 'phpmailer/src/Exception.php';
   require 'phpmailer/src/PHPMailer.php';

   $mail = new PHPMailer;
   $mail->Charset = 'UTF-8';

   $name = $_POST['name'];
   $email = $_POST['email'];
   $phone = $_POST['phone'];
   $message = $_POST['message'];

   $mail->setLanguage('ro','phpmailer/language/');
   $mail->IsSMTP();
   $mail->Host = 'smtp.inbox.ru'
   $mail->SMTPAuth = true;
   $mail->UserName = 'liceul_teoretic_al_donici@inbox.ru';
   $mail->Password = '#$$dr#$123$$#'Ș
   $mail->SMTPSecure = 'ss1';
   $mail->Port = 465;

   $mail->setFrom('liceul_teoretic_al_donici@inbox.ru', 'De la Tudor');
   $mail->addAddress('tudorsirghi56@gmail.com');

   $mail->Subject = 'ceva interesant';

   $body = '<h1>Un mesaj nou</h1>';

   if (trim(!empty($_POST['name']))) {
      $body.='<p><strong>Numele:</strong> '.$_POST['name'].'</p>'; 
   }
   if (trim(!empty($_POST['email']))) {
      $body.='<p><strong>E-mail:</strong> '.$_POST['email'].'</p>'; 
   }
   if (trim(!empty($_POST['phone']))) {
      $body.='<p><strong>Telefonul:</strong> '.$_POST['phone'].'</p>'; 
   }
   if (trim(!empty($_POST['message']))) {
      $body.='<p><strong>Mesajul:</strong> '.$_POST['message'].'</p>'; 
   }

   $mail->Body = $body;

   if (!$mail->send()) {
      $message1 = 'Totul sa trimis';
   } else{
      $message1 = 'Ceva nu sa primit';
   }
   
   $response = ['message' => $message1];
   header('Content-type: application/json');
   echo json_encode($response);
?>
