class RitualsController < ApplicationController
  def index
    @rituals = Ritual.all
    render json: @rituals
  end

  def new
    @ritual = Ritual.new
  end

  def create
    @ritual = Ritual.new(ritual_params)
    if @ritual.save
      render json: @ritual
    end
  end

  def show
    @ritual = Ritual.find(params[:id])
    render json: @ritual
  end

  def edit
  end

  def update
    @ritual = Ritual.find(params[:id])
    if @ritual.update(ritual_params)
      render json: @ritual
    end
  end

  private

  def ritual_params
    params.require(:ritual).permit(:name, :category, :description, :likes, items:[])
  end
end
