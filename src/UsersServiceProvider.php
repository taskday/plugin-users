<?php

namespace Performing\Taskday\Users;

use Taskday\Events\CardCreatedEvent;
use Taskday\Events\CardFieldUpdatedEvent;
use Taskday\Events\CardUpdatedEvent;
use Taskday\Facades\Taskday;
use Illuminate\Support\ServiceProvider;
use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\Event;
use Performing\Taskday\Users\Events\UsersFieldUpdatedEvent;
use Performing\Taskday\Users\Fields\UsersField;
use Performing\Taskday\Users\Listeners\SendNotificationToAssignedUsers;
use Performing\Taskday\Users\Listeners\SendNotificationToTaggedUsers;

class UsersServiceProvider extends ServiceProvider
{
    /**
     * Bootstrap the application services.
     */
    public function boot()
    {
        // Register custom field class to add extra behaviour
        Taskday::register(new UsersPlugin, 'users');

        Event::listen(
            CardFieldUpdatedEvent::class, 
            function (CardFieldUpdatedEvent $event) {
                if ($event->field->type === UsersField::type()) {
                    event(new UsersFieldUpdatedEvent($event->oldValue, $event->newValue, $event->field, $event->card));
                }
            }
        );

        Event::listen(
            UsersFieldUpdatedEvent::class,
            [SendNotificationToAssignedUsers::class, 'handle']
        );
        
        Event::listen(
            [CardCreatedEvent::class, CardUpdatedEvent::class],
            [SendNotificationToTaggedUsers::class, 'handle']
        );
    }

    /**
     * Register the application services.
     */
    public function register()
    {
        //
    }
}
