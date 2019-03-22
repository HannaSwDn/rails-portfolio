class MessagesController < ApplicationController

    def new
        @message = Message.new
    end

    def create
        @message = Message.new(message_params)

        if @message.save
            redirect_to messages_path
        else
            render :new, notice: "Sorry."
        end
    end

    private

    def message_params
        params.require(:message).permit(:name, :email, :title, :content)
    end

end
