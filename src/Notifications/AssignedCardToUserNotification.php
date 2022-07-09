<?php

namespace Performing\Taskday\Users\Notifications;

use Illuminate\Contracts\Broadcasting\ShouldBroadcast;
use Illuminate\Support\Facades\Auth;
use Taskday\Models\Card;
use Taskday\Notifications\Notification;
use Taskday\Notifications\PendingNotification;

class AssignedCardToUserNotification extends Notification implements ShouldBroadcast
{
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
     * Return the web push notification message.
     *
     * @param  mixed  $notifiable
     * @return array
     */
    public function toPendingNotification(): PendingNotification
    {
        return (new PendingNotification)
            ->title(Auth::user()->name . ' assigned you a card')
            ->body(substr(strip_tags($this->card->title), 0, 100) . '...')
            ->action('View', route('cards.show', [$this->card]));
    }
}
