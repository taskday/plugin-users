<?php

namespace Performing\Taskday\Users\Listeners;

use App\Events\CardUpdatedEvent;
use Taskday\Models\Card;
use Taskday\Models\User;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Support\Facades\Auth;
use Performing\Taskday\Users\Events\UserTaggedEvent;
use Performing\Taskday\Users\Notifications\UserTaggedNotification;

class SendNotificationToTaggedUsers implements ShouldQueue
{
    use InteractsWithQueue;

    /**
     * Handle the event.
     *
     * @param  object  $event
     * @return void
     */
    public function handle(UserTaggedEvent $event)
    {
        $card = Card::find($event->cardId);

        $re = '/data-type="mention".*?data-id="(.*?)"/m';
        preg_match_all($re, $card->content, $matches, PREG_SET_ORDER, 0);

        foreach ($matches as $id) {
            // if (Auth::id() != $id) {
            // }
        }

        User::find($id)->first()->notify(new UserTaggedNotification($event->cardId));
    }
}
