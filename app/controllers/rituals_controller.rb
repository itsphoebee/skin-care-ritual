class RitualsController < ApplicationController
  def index
    @rituals = Ritual.all
    render json: @rituals
  end

  def show
    @ritual = Ritual.find(params[:id])
    render json: @ritual
  end

end
