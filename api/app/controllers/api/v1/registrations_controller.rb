class Api::V1::RegistrationsController < ApplicationController
  skip_before_action :set_current_user, only: [:create]
  
  def create
    user = User.create(user_params)
    if user.save
      session[:user_id] = user.id
      render json: {
        message: "User created successfully",
        user: user
      }
    else
      render json: {
        errors: user.errors,
      }
    end
  end

  private
    def user_params
      params.require(:user).permit(:name, :email, :password, :password_confirmation)
    end
end
