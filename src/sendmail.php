<?php
require 'phpmailer/PHPMailer.php';
// require 'phpmailer/SMTP.php';
require 'phpmailer/Exception.php';

$mail = new PHPMailer\PHPMailer\PHPMailer();

$name = $_POST['username'];
$email = $_POST['email'];
$tel = $_POST['tel'];
$prod = $_POST['prod'];
$quantity = $_POST['quantity'];
$message = $_POST['message'];
// $text = $_POST['text'];
// $file = $_FILES['myfile'];

// Формирование самого письма
$title = "Заголовок письма";
$body = "
<h2>Новый заказ</h2>
<b>Имя:</b> $name<br>
<b>Почта:</b> $email<br><br>
<b>Почта:</b> $tel<br>
<b>Заказ:</b> $prod $quantity шт.<br>
<b>Сообщение:</b> $message<br>
";

// Настройки PHPMailer
$mail = new PHPMailer\PHPMailer\PHPMailer();
try {
    // $mail->isSMTP();   
    $mail->CharSet = "UTF-8";
    // $mail->SMTPAuth   = true;
    //$mail->SMTPDebug = 2;
    // $mail->Debugoutput = function($str, $level) {$GLOBALS['status'][] = $str;};

    // Настройки вашей почты
    // $mail->Host       = 'smtp.inbox.ru'; // SMTP сервера вашей почты
    // $mail->Username   = 'info'; // Логин на почте
    // $mail->Password   = 'Papia8140'; // Пароль на почте
    // $mail->SMTPSecure = 'ssl';
    // $mail->Port       = 465;
    $mail->setFrom('info@незамерзайка.москва', 'НЕЗАМЕРЗАЙКА'); // Адрес самой почты и имя отправителя

    // Получатель письма
    $mail->addAddress('info@незамерзайка.москва');  

    // Прикрипление файлов к письму
// if (!empty($file['name'][0])) {
//     for ($ct = 0; $ct < count($file['tmp_name']); $ct++) {
//         $uploadfile = tempnam(sys_get_temp_dir(), sha1($file['name'][$ct]));
//         $filename = $file['name'][$ct];
//         if (move_uploaded_file($file['tmp_name'][$ct], $uploadfile)) {
//             $mail->addAttachment($uploadfile, $filename);
//             $rfile[] = "Файл $filename прикреплён";
//         } else {
//             $rfile[] = "Не удалось прикрепить файл $filename";
//         }
//     }   
// }
// Отправка сообщения
$mail->isHTML(true);
$mail->Subject = $title;
$mail->Body = $body;    

// Проверяем отравленность сообщения
if ($mail->send()) {$result = "success";} 
else {$result = "error";}

} catch (Exception $e) {
    $result = "error";
    $status = "Сообщение не было отправлено. Причина ошибки: {$mail->ErrorInfo}";
}

// Отображение результата
echo json_encode(["result" => $result, "resultfile" => $rfile, "status" => $status]);


//     $mail->CharSet = 'UTF-8';
//     $mail->setLanguage('ru', 'phpmailer/language/');
//     $mail->IsHTML(true);

//     $mail->setFrom('panechek@inbox.ru', 'Оле Арена');
//     //Кому отправить
//     $mail->addAddress('panechek@inbox.ru');
//     //Тема письма
//     $mail->Subject = 'Потенциальный клиент';

//     $body = '<h1>Поступил новый заказ</h1>';

//     // if(trim(!empty($_POST['name']))){
//     //     $body.='<p><strong>Имя:</strong> '.$_POST['name'].'</p>';
//     // }

//     // if(trim(!empty($_POST['email']))){
//     //     $body.='<p><strong>E-mail:</strong> '.$_POST['email'].'</p>';
//     // }

//     // if(trim(!empty($_POST['gender']))){
//     //     $body.='<p><strong>Пол:</strong> '.$_POST['gender'].'</p>';
//     // }

//     // if(trim(!empty($_POST['age']))){
//     //     $body.='<p><strong>Возраст:</strong> '.$_POST['age'].'</p>';
//     // }

//     // if(trim(!empty($_POST['message']))){
//     //     $body.='<p><strong>Сообщение:</strong> '.$_POST['message'].'</p>';
//     // }

//     // if (!empty($_FILES['image']['tmp_name'])) {
//     //     $filePath = __DIR__ . "/files/" . $FILES['image']['name'];
        
//     //     if (copy($_FILES['image']['tmp_name'], $filePath)) {
//     //         $fileAttach = $filePath;
//     //         $body.='<p><strong>Фото в приложении.</strong>';
//     //         $mail->addAttachment($fileAttach);
//     //     }
//     // }

//     $mail->Body = $body;

//     //Отправляем 
//     if (!$mail->send()) {
//         $message = 'Ошибка';
//     } else {
//         $message = 'Данные отправлены!';
//     }

//     $response = ['message' => $message];

//     header('Content-type: application/json');
//     echo json_encode($response);
//