<?php

namespace Performing\Taskday\Users\Listeners;

use Taskday\Models\User;
use Performing\Taskday\Users\Events\UsersFieldUpdatedEvent;
use Performing\Taskday\Users\Notifications\AssignedCardToUserNotification;

class SendNotificationToAssignedUsers
{
    public function handle(UsersFieldUpdatedEvent $event)
    {
        // Find the new ids in newVakue and notify the users
        $newIds = array_diff(
            explode(',', $event->newValue),
            explode(',', $event->oldValue)
        );

        $users = User::whereIn('id', $newIds)->get();

        foreach ($users as $user) {
            $user->notify(new AssignedCardToUserNotification($event->card));
        }
    }
}
