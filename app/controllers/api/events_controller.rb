class Api::EventsController < ApplicationController
  def create
    @event = Event.new(event_params)
    @event.organizer_id = current_user.id
    if @event.date.class == Date && @event.time.class == Time
      @event.date = Date.parse(@event.date.to_s)
      @event.time = Time.parse(@event.time.to_s)
    end

    if @event.save
      # CategoryEvent.create({event_id: @event.id, category_id: params[:event][:category_id]})
      render "api/events/show"
    else
      render json: @event.errors.full_messages, status: 422
    end
  end

  def destroy
    @event = Event.find(params[:id])
    @event.destroy

  end

  def index
    if params[:category]
      @events = Event.where(category: params[:category])
    elsif params[:northLat]
      @events = Event.in_bounds({
        northEast: { 
          lat: params[:northLat],
          lng: params[:eastLng]
        },
        southWest: { 
          lat: params[:southLat],
          lng: params[:westLng]
        }
      })
    else
      @events = Event.all
    end
    render :index
  end

  def update
    @event = Event.find(params[:event][:id])
    @event.update_attributes(event_params)

    if @event.save
      render "api/events/show"
    else
      render json: @event.errors.full_messages, status: 422
    end
  end

  def show
    @event = Event.find(params[:id])
  end

  private

  def event_params
    params.require(:event).permit(:title, :description, :date, :time, :end_date, :end_time, :organizer_description, :organizer_name, :photo, :loc_ln_one, :tix_qty, :tix_price, :tix_title, :tix_desc , :sale_start_date, :sale_start_time, :sale_end_date, :sale_end_time, :tix_qty_per_min, :tix_qty_per_max, :category_id)
  end
end
