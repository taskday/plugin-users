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

class AssignedCardToUserNotification extends Notification implements ShouldBroadcast
{
    use Queueable, InteractsWithSockets;

    public $card;

    /**
     * Create a new notification instance.
     *
     * @return void
     */
    public function __construct(Card $card)
    {
        $this->card = $card;
    }

    /**
     * Get the notification's delivery channels.
     *
     * @param  mixed  $notifiable
     * @return array
     */
    public function via($notifiable)
    {
        return ['database', WebPushChannel::class];
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
        return [
            'title' => 'Tagged you!',
            'body' => substr(strip_tags($this->card->title), 0, 100) . '...',
            'user' => Auth::user(),
            'url' => route('cards.show', $this->card),
            'created_at' => now()
        ];
    }


    /**
     * Return the web push notification message.
     *
     * @param  mixed  $notifiable
     * @return array
     */
    public function toWebPush($notifiable, $notification)
    {
        return (new WebPushMessage)
            ->title('Tagged you!')
            ->icon('/faicons/256.png')
            ->body(substr(strip_tags($this->card->title), 0, 100) . '...')
            ->action('View', route('cards.show', [$this->card]))
            ->options(['TTL' => 1000]);
    }
}
