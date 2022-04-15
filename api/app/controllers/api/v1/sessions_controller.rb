class Api::V1::SessionsController < ApplicationController
  skip_before_action :set_current_user, only: [:create, :destroy]

  def create
    user = User.find_by(email: params[:email])
    if user.present? && user.authenticate(params[:password])
      session[:user_id] = user.id
      render json: {
        message: "User signed in successfully",
        user: {
          user_obj: user,
          session_info: {
            user_id: session[:user_id]
          }
        }
      }
    else
      render json: {
        message: 'Invalid credentials',
        status: 401
      }
    end
  end

  def signed_in
    if Current.user
      render json: {
        signed_in: true,
        user: Current.user
      }
    else
      render json: {
        signed_in: false
      }
    end
  end

  def destroy
    session[:user_id] = nil
    render json: {
      message: "User signed out successfully"
    }
  end
end
