<?php

namespace Performing\Taskday\Users\Listeners;

use Taskday\Models\Card;
use Taskday\Models\User;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Support\Facades\Auth;
use Performing\Taskday\Users\Notifications\UserTaggedNotification;
use Taskday\Events\CardCreatedEvent;
use Taskday\Events\CardUpdatedEvent;

class SendNotificationToTaggedUsers implements ShouldQueue
{
    use InteractsWithQueue;

    /**
     * Handle the event.
     *
     * @param  object  $event
     * @return void
     */
    public function handle(CardUpdatedEvent|CardCreatedEvent $event)
    {
        $card = Card::find($event->cardId);

        $re = '/data-type="mention".*?data-id="(.*?)"/m';
        preg_match_all($re, $card->content, $matches, PREG_SET_ORDER, 0);

        foreach ($matches as $id) {
            if (Auth::id() != $id) {
                User::find($id)->first()->notify(new UserTaggedNotification($event->cardId));
            }
        }
    }
}
