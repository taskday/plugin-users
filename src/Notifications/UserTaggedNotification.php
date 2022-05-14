<?php

namespace Performing\Taskday\Users\Notifications;

use Illuminate\Broadcasting\InteractsWithSockets;
use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Broadcasting\ShouldBroadcast;
use Illuminate\Notifications\Messages\MailMessage;
use Illuminate\Notifications\Notification;
use Illuminate\Support\Facades\Auth;
use Taskday\Models\Card;
use NotificationChannels\WebPush\WebPushChannel;
use NotificationChannels\WebPush\WebPushMessage;

class UserTaggedNotification extends Notification implements ShouldBroadcast
{
    use Queueable, InteractsWithSockets;

    public $cardId;

    /**
     * Create a new notification instance.
     *
     * @return void
     */
    public function __construct($cardId)
    {
        $this->cardId = $cardId;
    }

    /**
     * Get the notification's delivery channels.
     *
     * @param  mixed  $notifiable
     * @return array
     */
    public function via($notifiable)
    {
        return ['database', 'broadcast',  WebPushChannel::class, 'mail'];
    }

    /**
     * Get the mail representation of the notification.
     *
     * @param  mixed  $notifiable
     * @return \Illuminate\Notifications\Messages\MailMessage
     */
    public function toMail($notifiable)
    {
        return (new MailMessage)
                    ->line('The introduction to the notification.')
                    ->action('Notification Action', url('/'))
                    ->line('Thank you for using our application!');
    }

    /**
     * Get the array representation of the notification.
     *
     * @param  mixed  $notifiable
     * @return array
     */
    public function toArray($notifiable)
    {
        $card = Card::find($this->cardId);

        return [
            'title' => 'You have been mentioned',
            'body' => substr(strip_tags($card->title), 0, 100) . '...',
            'user' => Auth::user(),
            'url' => route('cards.show', $card),
            'created_at' => now()
        ];
    }

    /**
     * Return the web push notification message.
     *
     * @param  mixed  $notifiable
     * @return WebPushMessage
     */
    public function toWebPush($notifiable, $notification)
    {
        $card = Card::find($this->cardId);

        return (new WebPushMessage)
            ->title('You have been mentioned')
            ->icon('/favicons/256.png')
            ->body(substr(strip_tags($card->title), 0, 100) . '...')
            ->action('View', route('cards.show', [$this->cardId]))
            ->options(['TTL' => 1000]);
    }
}
