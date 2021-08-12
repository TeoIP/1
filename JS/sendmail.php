<?php
   use PHPMailer/PHPMailer/PHPMailer;
   use PHPMailer/PHPMailer/Exception;

   require 'phpmailer/src/Exception.php';
   require 'phpmailer/src/PHPMailer.php';

   $mail = new PHPMailer(true);
   $mail->Charset = 'UTF-8';
   $mail->setLanguage('ro','phpmailer/language/');
   $mail->IsHTML(true);

   $mail->setFrom('liceul.teoretic@aldonici.ru', 'De la Tudor');
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
      $message = 'Totul sa trimis';
   } else{
      $message = 'Ceva nu sa primit';
   }
   
   $response = ['message' => $message];
   header('Content-type: application/json');
   echo json_encode($response);
?>