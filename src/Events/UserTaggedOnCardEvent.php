<?php

namespace Performing\Taskday\Users\Events;

use Taskday\Models\Card;
use Taskday\Models\User;
use Illuminate\Broadcasting\InteractsWithSockets;
use Illuminate\Foundation\Events\Dispatchable;
use Illuminate\Queue\SerializesModels;

class UserTaggedOnCardEvent
{
    use Dispatchable, InteractsWithSockets, SerializesModels;

    public User $user;

    public function __construct(User $user, Card $card)
    {
        $this->user = $user;
        $this->card = $card;
    }

}
